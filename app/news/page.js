import Link from 'next/link';
import Image from 'next/image';
import { DUMMY_NEWS } from '@/dummy-news';

export default function News() {
    return (
        <ul className="news-list">
            { DUMMY_NEWS.map(newsItem => <li key={newsItem.id}>
                <Link href={`/news/${newsItem.slug}`}>
                    <Image src={`/images/news/${newsItem.image}`} alt={newsItem.title} width="200" height="150" />
                    <span>{newsItem.title}</span>
                </Link>
            </li>)}
        </ul>
    )
}