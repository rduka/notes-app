import React from 'react';
import Grid from '@material-ui/core/Grid';

function NoNotesFound(props) {
    const imageClass = props.notes.length === 0 ? "add-notes-img" : "no-notes-img";
    const content = props.notes.length === 0 ? "You don't have any notes" : "Couldn't find any notes";
    return  (
        <Grid container className="no-notes-container ease-in-animation" spacing={1}>
            <Grid item xs={12} sm={12}>
                <p>{content}</p>
                <span className={imageClass}></span>
            </Grid>
        </Grid>
    );
}

export default NoNotesFound;