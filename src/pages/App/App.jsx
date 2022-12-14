import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NotesPage from '../NotesPage/NotesPage';
import NavBar from '../../components/NavBar/NavBar';
import { find } from "../../utilities/notes-api"

export default function App() {
  const [user, setUser] = useState(getUser());
  const [notes, setNotes] = useState([]);

  
  useEffect(() => {
    async function displayNotes() {
      const noteData = await find();
      setNotes(noteData)
    }
    displayNotes();
  }, [user]);

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} setNotes={setNotes} />
            <Routes>
              {/* Route components in here */}
              <Route path="/notes" element={<NotesPage setNotes={setNotes} notes={ notes } />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
