import React from 'react';
import NoteItem from './NoteItem';
import NoNotesFound from './NoNotes';
import Grid from '@material-ui/core/Grid';
import { CSSTransition, Transition, TransitionGroup } from 'react-transition-group';

function NoteList(props) {

    if(props.notes.length === 0) {
        return <NoNotesFound notes={props.notes}/>        
    }

    // get notes taking in consideration search key words and tab category
    const notesDataset = props.notes.filter(note => 
        (props.search === "" || note.description.toLowerCase().includes(props.search.toLowerCase()) ||
         note.title.toLowerCase().includes(props.search.toLowerCase()) ) &&
        (props.category === "all" || note.category.toLowerCase() === props.category.toLowerCase())
    );

    if(props.search !== "" && notesDataset.length === 0) {
        return <NoNotesFound notes={props.notes} />        
    }

    var noteItemsComponents = notesDataset.map(note => 
        <NoteItem 
            key = {note.id}
            id = {note.id}
            title = {note.title} 
            description = {note.description}
            category = {note.category}
            completed = {note.completed}
            createdDate = {note.createdDate}
            updatedDate = {note.updatedDate}
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