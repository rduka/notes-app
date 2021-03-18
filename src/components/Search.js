import React from 'react';
import Grid from '@material-ui/core/Grid';

function Search() {
    return  (
        <Grid container className="search-bar-container" spacing={1}>
            <Grid item xs={12} sm={12}>
                <input 
                    type="text" 
                    placeholder="Search notes..." 
                    className="search-bar-input" 
                />
            </Grid>
        </Grid>
    );
}

export default Search;