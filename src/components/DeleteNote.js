import React from "react";
import Button from '@material-ui/core/Button';
import Popper from "@material-ui/core/Popper";
import DeleteIcon from '@material-ui/icons/Delete';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { connect } from "react-redux";
import deleteNote from '../actions/deleteNote';

function DeleteNote(props) {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [arrowRef, setArrowRef] = React.useState(null); //will fix this one later

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
    setArrowRef(arrowRef ? null : event.currentTarget);
  };

  function handleCancelClick(){
    setAnchorEl(null)
  }

  function handleClickAway() {
    setAnchorEl(null)
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
        <div className="note-delete-container">
            <DeleteIcon className="note-delete-icon" aria-describedby={id} id={props.id} onClick={handleClick} />
            <Popper
                className="note-delete-popper"
                id={id}
                open={open}
                anchorEl={anchorEl}
                placement="top"
                modifiers={{
                    arrow: {
                        enabled: false,
                        element: arrowRef
                        }
                }}
            >
                <p className="note-delete-title">Delete note?</p>
                <Button className="note-cancel-btn" onClick={handleCancelClick}>Cancel</Button>
                <Button className="note-delete-btn" onClick={() => props.handleDeleteClick(props.id)}>Delete</Button>
            </Popper>
        </div>
    </ClickAwayListener> 
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleDeleteClick: (value)=> dispatch(deleteNote(value))
  }
}

export default connect(null, mapDispatchToProps)(DeleteNote);