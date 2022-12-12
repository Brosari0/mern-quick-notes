export default function({ note }) {
  console.log(note)
  return (
    <p>{note.content}</p>
  )
}