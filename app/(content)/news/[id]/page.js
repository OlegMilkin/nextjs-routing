import { getNewsItem } from '@/app/lib/news';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function NewsDetail ({ params }) {
    const { id } = await params;
    const newsItem = await getNewsItem(id);

    if (!newsItem) {
        notFound();
    };

    return (
        <article className='news-article'>
            <header>
                <Link href={`${id}/image`} scroll={false}>
                    <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
                </Link>
                <h1>{newsItem.title}</h1>
                <time dateTime={newsItem.date}>{newsItem.date}</time>
            </header>
            <p>{newsItem.content}</p>
        </article>
    )
}