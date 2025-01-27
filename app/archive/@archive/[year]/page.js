import NewsList from "@/app/components/news-list";
import { getNewsForYear } from "@/app/lib/news";

export default function filteredNewsPage ({params}) {
    const newsYear = params.year;
    const news = getNewsForYear(newsYear);

    return <NewsList news={news} />
}