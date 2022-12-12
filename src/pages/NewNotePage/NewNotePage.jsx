import { useState } from "react";

export default function NewOrderPage({ addNotes }) {
  const [newNote, setNewNote] = useState({
    content: ""
  })

  function handleChange(evt) {
    let content = evt.target.value;
    setNewNote(content);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    addNotes(newNote)
    setNewNote({ content: "" })
  }

  return (
    <>
    <h1>Add a note!</h1>
    <form onSubmit={handleSubmit}>
      <input 
      value={newNote.content}
      onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
    </>
  );
}