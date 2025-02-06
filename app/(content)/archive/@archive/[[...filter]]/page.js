import NewsList from "@/app/components/news-list";
import { getNewsForYear, getAvailableNewsYears, getAvailableNewsMonths, getNewsForYearAndMonth } from "@/app/lib/news";
import Link from "next/link";
import { Suspense } from "react";

async function FilteredNews({year, month}) {
    let news;

    if(year && !month) {
        news = await getNewsForYear(year);
    } else if (year && month) {
        news = await getNewsForYearAndMonth(year, month);
    }

    let newsContent = <p>No news found for this period</p>

    if (news && news.length > 0) {
        newsContent = <NewsList news={news} />
    }

    return newsContent;
}

async function FilterHeader({year, month}) {
    const availableYear = await getAvailableNewsYears();
    let links = availableYear;
    let news;

    if (
        (year && !availableYear.includes(year)) ||
        (month && !getAvailableNewsMonths(year).includes(month))
    ) {
        throw new Error('Invalid filter');
    }

    if (year && !month) {
        links = getAvailableNewsMonths(year);
    }

    if (year && month) {
        news = await getNewsForYearAndMonth(year, month);
        links = [];
    }

    return <header id="archive-header">
        <nav>
            <ul>
                {links.map(link => {
                    const href = year ? `/archive/${year}/${link}` : `/archive/${link}`;

                    return (
                        <li key={link}>
                            <Link href={href}>{link}</Link>
                        </li>
                    )})}
            </ul>
        </nav>
    </header>
}

export default async function filteredNewsPage ({params}) {
    const filter = params.filter;

    const selectedYear = filter?.[0];
    const selectedMonth = filter?.[1];

    return (
        <>
            <Suspense fallback={'Loading filter...'}>
                <FilterHeader year={selectedYear} month={selectedMonth} />
            </Suspense>
            <Suspense fallback={'Loading news...'}>
                <FilteredNews year={selectedYear} month={selectedMonth} />
            </Suspense>
        </>
    )
}