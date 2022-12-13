import { useEffect } from "react";
import NoteCard from "../../components/NoteCard/NoteCard"
import CreateNewNote from "../../components/CreateNewNote/CreateNewNote";

export default function NotesPage({ notes, displayNotes }) {
  useEffect(function() {
    displayNotes();
  }, [])

  return (
    <>
    <h1>Notes</h1>
    <div>
    <CreateNewNote displayNotes={displayNotes} />
    </div>
      <div>
        {notes.map((note, idx) => (
            <div>
              <div key = {idx}>
              <NoteCard note={note} idx={idx} />
              </div>
            </div>
        ))}
      </div>
    </>
  );
}