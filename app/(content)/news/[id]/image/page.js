import { getNewsItem } from '@/app/lib/news';
import { notFound } from 'next/navigation';

export default async function ImagePage({params}) {
    const {id} = await params;

    const newsItem = await getNewsItem(id);

    if (!newsItem) {
        notFound();
    };

    return (<div className="fullscreen-image">
        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>)
}