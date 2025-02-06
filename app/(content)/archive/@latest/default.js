import NewsList from "@/app/components/news-list";
import { getLatestNews } from "@/app/lib/news"

export default async function LatestArchivePage() {
const latestNews = await getLatestNews();

    return (<>
        <h2>Latest news</h2>
        <NewsList news={latestNews} />
    </>)
}