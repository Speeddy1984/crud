const NoteList = ({ notes, onDeleteNote }) => {
  return (
    <div className="notes">
      {notes.map((note) => (
        <div key={note.id} className="note">
          <span>{note.content}</span>
          <button onClick={() => onDeleteNote(note.id)}>Удалить</button>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
