import React from 'react';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';

function Search(props) {
    return  (
        <Grid container className="search-bar-container" spacing={1}>
            <Grid item xs={12} sm={12}>
                <input 
                    type="text" 
                    placeholder="Search notes..." 
                    className="search-bar-input" 
                    value = {props.searchValue}
                    onChange = {(event) => props.handleChange(event.target.value)}
                />
                <SearchIcon className="search-icon" />
            </Grid>
        </Grid>
    );
}

export default Search;