import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  activeButton: {
    backgroundColor: '#69BCFF',
    color: '#FFFFFF !important',
    opacity: '1'
  }
}));

function NoteTabs() {
  let classNames = require('classnames');
  const classes = useStyles();

  var btnClass = classNames({
    btn: true,
    'tab-btn': true,
    'btn-over': false,
    [classes.activeButton]: true
  });

  return (
    <div className="note-tabs-container">
        <Grid container spacing={2}>
            <Grid item xs={12} sm={7}>
                <Button className={btnClass}>All</Button>
                <Button className="tab-btn" endIcon={<span className="home-btn-span"></span>}>Home</Button>
                <Button className="tab-btn" endIcon={<span className="work-btn-span"></span>}>Work</Button>
                <Button className="tab-btn" endIcon={<span className="personal-btn-span"></span>}>Personal</Button>
            </Grid>
            <Grid item xs={1} sm={2}>
            </Grid>
            <Grid item xs={12} sm={3}>
                <Button className="add-note-btn" variant="contained" startIcon={<AddIcon />}>Add Note</Button>
            </Grid>
        </Grid>
    </div>
  );
}

export default NoteTabs;