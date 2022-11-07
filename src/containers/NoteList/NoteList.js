import react from "react";
import Note from "../../components/Note/Note";
import AxiosNote from "../../AxiosNote";

const NoteList = (props) => {
    return (props.Notes.map((item ,index) => (
        <Note key={item.note.id} style={item.style} value={item.note} readOnly={true} onDelete={props.onDeleteNote} onEdit={(item)=>props.onEditNote(item)} />
    )))
}

export default NoteList