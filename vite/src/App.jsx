import { useState, useEffect } from "react";
import "./App.css";
import NoteForm from "./components/Crud/NoteForm";
import NoteList from "./components/Crud/NoteList";

const App = () => {
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    try {
      const response = await fetch("http://localhost:7070/notes");
      if (!response.ok) {
        throw new Error("Нет ответа от сервера");
      }
      const data = await response.json();
      setNotes(data);
    } catch (error) {
      console.error("Ошибка получения заметок:", error);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const addNote = async (content) => {
    try {
      const response = await fetch("http://localhost:7070/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content }),
      });
      if (!response.ok) {
        throw new Error("Нет ответа от сервера");
      }
      fetchNotes();
    } catch (error) {
      console.error("Ошибка добавления заметки:", error);
    }
  };

  const deleteNote = async (id) => {
    try {
      const response = await fetch(`http://localhost:7070/notes/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Нет ответа от сервера");
      }
      fetchNotes();
    } catch (error) {
      console.error("Ошибка удаления заметки:", error);
    }
  };

  return (
    <div className="crud">
      <NoteForm addNote={addNote} />
      <button className="reload" onClick={fetchNotes}>
        Обновить
      </button>
      <NoteList notes={notes} onDeleteNote={deleteNote} />
    </div>
  );
};

export default App;
