import { useState } from "react";
import NoteCard from "../../components/NoteCard/NoteCard";

import CreateNewNote from "../../components/CreateNewNote/CreateNewNote";


export default function NotesPage({ notes, setNotes }) {
  const [edit, setEdit] = useState(true)

  return (
    <>
      <h1>Notes</h1>
      <div>
        <CreateNewNote setNotes={setNotes} notes={notes} />
      </div>
      <div>
        {notes.map((note, idx) => (
          <div>
            <NoteCard setNotes={setNotes} note={note} idx={idx} />
          </div>
        ))}
      </div>
    </>
  );
}