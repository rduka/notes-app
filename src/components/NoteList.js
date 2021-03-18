import React from 'react';
import NoteItem from './NoteItem';
import Grid from '@material-ui/core/Grid';

function NoteList(props) {

    var noteItemsComponents = props.notesData.map(note => 
        <NoteItem 
            key = {note.id}
            id = {note.id}
            title = {note.title} 
            description = {note.description}
            category = {note.category}
            completed = {note.completed}
            createdDate = {note.createdDate}
        />
    );

    return (
        <div className="notes-container">
            <Grid container spacing={2}>
                {noteItemsComponents}
            </Grid>
        </div>
    );
}

export default NoteList;