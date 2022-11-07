import react, { useState, useRef, useEffect, useContext } from "react";
import { MainContext } from "../../context/main-context";
import Draggable from "react-draggable";
import './Note.css'
import btnSave from '../../constants/save.png'
import btnEdit from '../../constants/pencil.png'
import btnEraser from '../../constants/eraser.png'
import btnDelete from '../../constants/delete.png'


const Note = (props) => {

    const textareaRef = useRef();
    const nodeRef = useRef(null);
    const [title, setTitle] = useState(props.value.title)
    const [readOnly, setReadOnly] = useState(props.readOnly)

    const mainContext = useContext(MainContext)


    useEffect(() => {
        nodeRef.current.style.transform = `${nodeRef.current.style.transform} ${props.style.transform}`
        if (!readOnly) {
            textareaRef.current.focus();
        }
    }, [])

    const onStartHandler = () => {
        nodeRef.current.style.transform = `${nodeRef.current.style.transform}`
        nodeRef.current.style.zIndex = mainContext.zIndexNote;
        mainContext.changezIndex(mainContext.zIndexNote + 1)
    }

    const onSaveHandler = (event) => {
        event.preventDefault()
        if (title.trim() === '') {
            textareaRef.current.focus()
            return
        }
        props.onSave({ title: title })
        setTitle('')
        onStartHandler()
    }

    const onEditHandler = (event) => {
        event.preventDefault()
        if (title.trim() === '') {
            textareaRef.current.focus()
            return
        }
        props.onEdit({ id: props.value.id, title: title })
        setReadOnly(true)
        onStartHandler()
    }

    const onGetHandler = (event) => {
        event.preventDefault()
        setReadOnly(false)
        textareaRef.current.focus()
        textareaRef.current.setSelectionRange(0, title.length);
        setTitle(textareaRef.current.value)
    }

    const onChangeHandler = (event) => {
        event.preventDefault()
        setTitle(event.target.value)
    }

    const onCancelHandler = (event) => {
        event.preventDefault()
        setTitle('')
    }

    const onDeleteHandler = (event) => {
        event.preventDefault()
        if (props.value.id !== undefined) {
            console.log(props.value.id)
            props.onDelete(props.value.id)
        }
    }

    const onStopHandler = (event) => {
        if (event.target.tagName !== 'IMG') {
            nodeRef.current.style.transform = `${nodeRef.current.style.transform} ${props.style.transform}`
        }
    }


    return (
        <Draggable nodeRef={nodeRef} onStart={onStartHandler} disabled={false} onStop={onStopHandler} >
            <div className={`note ${!readOnly ? 'selected-note' : ''}`} ref={nodeRef} style={props.style} >
                <textarea ref={textareaRef} onChange={onChangeHandler} readOnly={readOnly} value={title} ></textarea>
                {
                    (!readOnly) ? (
                        <div>
                            <button onClick={props.value.id === undefined ? onSaveHandler : onEditHandler}><img src={btnSave} /></button>
                            <button onClick={onCancelHandler}><img src={btnEraser} /></button>
                        </div>
                    ) : (
                        <div>
                            <button onClick={onGetHandler}><img src={btnEdit} /></button>
                            <button onClick={onDeleteHandler}><img src={btnDelete} /></button>
                        </div>
                    )
                }
            </div>
        </Draggable>
    )
}

export default Note