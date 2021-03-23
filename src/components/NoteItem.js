import React from 'react';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteNote from './DeleteNote'
import EditNote from './EditNote'
import { connect } from "react-redux";
import completeNote from '../actions/completeNote';

function NoteItem(props) {
    const noteItemClass = getNoteItemClass(props.completed, props.category);
    const formatedDate = getFormatedDate(props.updatedDate);
    return (
        <Grid item xs={12} sm={6}>
            <div className={`note-item-container ${noteItemClass}`}>
                <div className="note-item-content">
                    <div className="note-item-header">
                        <Checkbox
                            color="default"
                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                            className="note-item-chbx"
                            checked = {props.completed}
                            onChange = {() => props.handleCompleteChange(props.id)}
                        /> 
                        <label className="note-item-title">{props.title}</label>
                        <EditNote 
                            id = {props.id}
                            title = {props.title} 
                            description = {props.description}
                            category = {props.category}
                        />
                        <DeleteNote 
                            key={props.id} 
                            id={props.id} 
                            handleDeleteClick={props.handleDeleteClick}
                        />
                    </div>
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

    if (category === undefined || category === "") {
        return noteItemClass;
    }

    if(completed) {
        noteItemClass += " note-item-completed";
        return noteItemClass;
    }

    if (category.toLowerCase() === "home") {
        noteItemClass += " note-item-home";
    }

    if (category.toLowerCase() === "work") {
        noteItemClass += " note-item-work";
    }

    if (category.toLowerCase() === "personal") {
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

const mapDispatchToProps = (dispatch) => {
    return {
        handleCompleteChange: (value)=> dispatch(completeNote(value))
    }
}
  
export default connect(null, mapDispatchToProps)(NoteItem);