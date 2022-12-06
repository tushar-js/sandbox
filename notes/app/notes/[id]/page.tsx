import styles from '../Notes.module.css';
import { POCKETBASE_URL } from "../../../constants/api-endpoints"

async function getNote(noteId: string) {
    const res = await fetch(`${POCKETBASE_URL}/collections/notes/records/${noteId}`);
    const data = await res.json();
    return data;
}

export default async function NotePage({ params }: any) {
    const note = await getNote(params.id)

    return (
        <div>
            <h1>notes</h1>
            <div className={styles.note}>
                <h3>{note.title}</h3>
                <h5>{note.content}</h5>
                <p>{note.created}</p>
            </div>
        </div>
    )
}