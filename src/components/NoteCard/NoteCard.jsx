export default function NoteCard({ note, idx }) {
  return (
    <p>{idx}- {note.content} {note.createdAt.toLocaleString()}</p>
  )
}