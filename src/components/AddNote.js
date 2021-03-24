import React, {useState} from 'react';
import NoteForm from './NoteForm'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Modal from '@material-ui/core/Modal';

function AddNote(props) {

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
        <div>
            <Button 
                className="add-note-btn" 
                variant="contained" 
                startIcon={<AddIcon />}
                onClick={handleOpen}
            >
                Add Note
            </Button>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                className={modalAnimationClass}
            >
                <div className="some-weird-outline-bug">
                    <NoteForm handleCancelClick = {handleClose}/>
                </div>
            </Modal>
        </div>
    );
}

export default AddNote;