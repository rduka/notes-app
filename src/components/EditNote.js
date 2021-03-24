import React, { useState } from 'react';
import NoteForm from './NoteForm'
import EditIcon from '@material-ui/icons/Edit';
import Modal from '@material-ui/core/Modal';

function EditNote(props) {

    const [modalAnimationClass, setModalAnimationClass] = useState("show-modal-animation");
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setModalAnimationClass("show-modal-animation"); 
        setOpen(true);
    };

    const handleClose = () => {
        setModalAnimationClass("hide-modal-animation"); 
        
        setTimeout(() => {  
            setOpen(false);
        }, 400); //so the efect on close can be seen
    };

    return (
        <div className="edit-note-container">
            <EditIcon className="note-edit-icon" onClick={handleOpen}/>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                className={modalAnimationClass}
            >
                <div className="some-weird-outline-bug">
                    <NoteForm 
                        id = {props.id}
                        title = {props.title} 
                        description = {props.description}
                        category = {props.category}
                        handleCancelClick = {handleClose}
                    />
                </div>
            </Modal>
        </div>
    );
}

export default EditNote;