import React from 'react';
import NoteForm from './NoteForm'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Modal from '@material-ui/core/Modal';

function AddNote(props) {

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
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
            >
                <div className="some-weird-outline-bug">
                    <NoteForm handleCancelClick = {handleClose}/>
                </div>
            </Modal>
        </div>
    );
}

export default AddNote;