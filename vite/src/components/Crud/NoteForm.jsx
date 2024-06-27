import { useState } from "react";

const NoteForm = ({ addNote }) => {
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim()) {
      addNote(content);
      setContent("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="input"
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Добавить</button>
    </form>
  );
};

export default NoteForm;
