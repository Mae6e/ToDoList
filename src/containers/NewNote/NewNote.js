import react from "react";
import Wrapper from "../../hoc/Wrapper/Wrapper";
import AxiosNote from "../../AxiosNote";
import Note from "../../components/Note/Note";

const NewNote = (props) => {
    return (
        <Note style={props.style} value={{}} readOnly={false} onSave={props.onSaveNote} />
    )
}

export default NewNote