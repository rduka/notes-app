import React from 'react';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import { connect } from "react-redux";
import searchNotes from '../actions/searchNotes';

function Search(props) {
    return  (
        <Grid container className="search-bar-container" spacing={1}>
            <Grid item xs={12} sm={12}>
                <input 
                    type="text" 
                    placeholder="Search notes..." 
                    className="search-bar-input" 
                    value = {props.search}
                    onChange = {(event) => props.handleChange(event.target.value)}
                />
                <SearchIcon className="search-icon" />
            </Grid>
        </Grid>
    );
}
  
const mapDispatchToProps = (dispatch) => {
    return {
        handleChange: (value)=> dispatch(searchNotes(value))
    }
}
  
export default connect(null, mapDispatchToProps)(Search);