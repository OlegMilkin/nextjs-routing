import NewsList from '@/app/components/news-list';
import { getAllNews } from '@/app/lib/news';

export default async function News() {
    //Clien-side fetch
    // const response = await fetch('http://localhost:8080/news');

    // if (!response.ok) {
    //     throw new Error('Failed to fetch news');
    // }

    // const news = await response.json();

    //Server-side fetch

    const news = await getAllNews();

    return (
        <NewsList news={news} />
    )
}