export default function ArchiveLayout({archive, latest}) {
    return (
        <div>
            <h2>Archive</h2>
            <section>{archive}</section>
            <hr />
            <section>{latest}</section>
        </div>
    )
}