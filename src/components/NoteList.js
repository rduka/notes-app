import React from 'react';
import NoteItem from './NoteItem';
import Grid from '@material-ui/core/Grid';

function NoteList() {
    return (
        <div className="notes-container">
            <Grid container spacing={2}>
                <NoteItem />
                <NoteItem />
                <NoteItem />
                <NoteItem />
            </Grid>
        </div>
    );
}

export default NoteList;