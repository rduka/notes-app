import React from 'react';
import Grid from '@material-ui/core/Grid';

function NoNotesFound() {
    return  (
        <Grid container className="no-notes-container" spacing={1}>
            <Grid item xs={12} sm={12}>
                <p>You don't have any notes</p>
                <span className="add-notes-img"></span>
            </Grid>
        </Grid>
    );
}

export default NoNotesFound;