import React from 'react';
import AddNote from './AddNote'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { connect } from "react-redux";
import changeCategory from '../actions/changeCategory';

function NoteTabs(props) {

  return (
    <div className="note-tabs-container">
        <Grid container spacing={2}>
            <Grid item xs={12} sm={9}>
                <Button 
                  value="all" 
                  className={`tab-btn ${props.category === "all" ? "all-btn" : ""}`}
                  onClick={() => props.handleClick("all")}
                >
                  All
                </Button>
                <Button 
                  value="home" 
                  className={`tab-btn ${props.category === "home" ? "home-btn" : ""}`}
                  endIcon={<span className="home-btn-span">&#8226;</span>}
                  onClick={() => props.handleClick("home")}
                >
                  Home
                </Button>
                <Button 
                  value="work" 
                  className={`tab-btn ${props.category === "work" ? "work-btn" : ""}`}
                  endIcon={<span className="work-btn-span">&#8226;</span>}
                  onClick={() => props.handleClick("work")}
                >
                  Work
                </Button>
                <Button 
                  value="personal" 
                  className={`tab-btn ${props.category === "personal" ? "personal-btn" : ""}`}
                  endIcon={<span className="personal-btn-span">&#8226;</span>}
                  onClick={() => props.handleClick("personal")}
                >
                  Personal
                </Button>
            </Grid>
            <Grid item xs={12} sm={3}>
                <AddNote />
            </Grid>
        </Grid>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: (value)=> dispatch(changeCategory(value))
  }
}

export default connect(null, mapDispatchToProps)(NoteTabs);