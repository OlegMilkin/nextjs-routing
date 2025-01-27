import { DUMMY_NEWS } from '@/dummy-news';
import NewsList from '../components/news-list';

export default function News() {
    return (
        <NewsList news={DUMMY_NEWS} />
    )
}