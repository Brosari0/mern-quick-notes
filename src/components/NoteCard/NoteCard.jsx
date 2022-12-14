import { useState } from "react";
import * as notesAPI from "../../utilities/notes-api"

export default function NoteCard({ note, setNote, key }) {
  const [formData, setFormData] = useState({
    content: `${note.content}`
  })
  const [edit, setEdit] = useState(true)

  const date = new Date(note.createdAt);
  const dateOptions = {weekday: 'long', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric'}

  function handleChange(evt) {
    evt.preventDefault();
    const data = { [evt.target.name]: evt.target.value };
    setFormData(data);
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    const payload = {content: evt.target.value};
    console.log(evt);
    const result = await notesAPI.edit(payload);
    setNote(result)
  }

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>

        {edit ?
          <p>{key}- {note.content} {date.toLocaleDateString(undefined, dateOptions)}</p>
          :
          <form onSubmit={handleSubmit}>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <input type="text" name="content" value={formData.content} onChange={handleChange} />
              <button type="submit">Submit</button>
            </div>
          </form>
        }
        <button onClick={() => setEdit(!edit)}>EDIT</button>
      </div>
    </>
  )
}