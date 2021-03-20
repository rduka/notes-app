import React from 'react';
import AddNote from './AddNote'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

function NoteTabs(props) {

  return (
    <div className="note-tabs-container">
        <Grid container spacing={2}>
            <Grid item xs={12} sm={7}>
                <Button 
                  value="all" 
                  className={`tab-btn ${props.categoryValue === "all" ? "all-btn" : ""}`}
                  onClick={() => props.handleClick("all")}
                >
                  All
                </Button>
                <Button 
                  value="home" 
                  className={`tab-btn ${props.categoryValue === "home" ? "home-btn" : ""}`}
                  endIcon={<span className="home-btn-span"></span>}
                  onClick={() => props.handleClick("home")}
                >
                  Home
                </Button>
                <Button 
                  value="work" 
                  className={`tab-btn ${props.categoryValue === "work" ? "work-btn" : ""}`}
                  endIcon={<span className="work-btn-span"></span>}
                  onClick={() => props.handleClick("work")}
                >
                  Work
                </Button>
                <Button 
                  value="personal" 
                  className={`tab-btn ${props.categoryValue === "personal" ? "personal-btn" : ""}`}
                  endIcon={<span className="personal-btn-span"></span>}
                  onClick={() => props.handleClick("personal")}
                >
                  Personal
                </Button>
            </Grid>
            <Grid item xs={1} sm={2}>
            </Grid>
            <Grid item xs={12} sm={3}>
                <AddNote />
            </Grid>
        </Grid>
    </div>
  );
}

export default NoteTabs;