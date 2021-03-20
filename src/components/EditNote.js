import React from 'react';
import NoteForm from './NoteForm'
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import Modal from '@material-ui/core/Modal';

function EditNote(props) {

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="edit-note-container">
            <EditIcon className="note-edit-icon" onClick={handleOpen}/>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
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