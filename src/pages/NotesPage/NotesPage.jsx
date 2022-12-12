import { checkToken } from "../../utilities/users-service"
import NoteCard from "../../components/NoteCard/NoteCard"

export default function NotesPage({ notes }) {
  function displayNotes() {
    if (!notes.length) return "No Notes Yet!";
    return;
  }
  return (
    <>
    <h1>Notes</h1>
      <div>
        {displayNotes()}
      {notes.map((note) => (
        <NoteCard note={note} />
        ))}
      </div>
    </>
  );
}