import React from 'react';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

function NoteItem(props) {
    const noteItemClass = getNoteItemClass(props.completed, props.category);
    const formatedDate = getFormatedDate(props.createdDate);
    return (
        <Grid item xs={12} sm={6}>
            <div className={`note-item-container ${noteItemClass}`}>
                <div className="note-item-content">
                    <Checkbox
                        color="default"
                        inputProps={{ 'aria-label': 'checkbox with default color' }}
                        className="note-item-chbx"
                        checked = {props.completed}
                    /> 
                    <label className="note-item-title">{props.title}</label>
                    <EditIcon className="note-edit-icon" />
                    <DeleteIcon className="note-delete-icon" />
                    <p>
                        {props.description}
                    </p>
                    <label className="note-item-date">
                        {formatedDate}
                    </label>
                </div>
            </div>
        </Grid>
    );
}

function getNoteItemClass(completed, category) {
    let noteItemClass = "";

    if(completed) {
        noteItemClass += " note-item-completed";
        return noteItemClass;
    }

    if (category === "home") {
        noteItemClass += " note-item-home";
    }

    if (category === "work") {
        noteItemClass += " note-item-work";
    }

    if (category === "personal") {
        noteItemClass += " note-item-personal";
    }

    return noteItemClass;
}

function getFormatedDate(date) {
    const initDate = new Date(date);
    const shortMonth = initDate.toLocaleString('default', { month: 'short' });
    const day = initDate.getDate();
    const year = initDate.getFullYear();
    return shortMonth + " " + day + ", " + year;
}

export default NoteItem;