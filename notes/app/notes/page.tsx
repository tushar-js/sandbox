// https://github.com/fireship-io/next13-pocketbase-demo

async function getNotes() {
    const res = await fetch(
        'http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage=30',
        { cache: 'no-store' }
    );
    const data = await res.json();
    return data?.items as any[]

}


export default async function NotesPage() {
    const notes = await getNotes();
    return (
        <div>
            <h1>Notes</h1>
            <div>
                {notes?.map(note => {
                    return <Note key={note.id} note={note} />
                })}
            </div>
        </div>
    )
}

function Note({ note }: any) {
    const { id, title, content, created } = note || {};
    return (
        <div>
            <h2>{title}</h2>
            <h4>{content}</h4>
        </div>
    )
}