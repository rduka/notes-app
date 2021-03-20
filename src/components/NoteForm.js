import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

function NoteForm(props) {

    let title = props.id === undefined ? "Add Note" : "Update Note";
    let button = props.id === undefined ? "Add" : "Update";

    return (
        <Container className="note-form-container" spacing={0} fixed>
            <Grid item xs={12} sm={12} className="form-title">
                <h2>{title}</h2>
            </Grid>
            <Grid container spacing={2} className="note-form-title-container">
                <Grid item xs={12} sm={7} >
                    <input type="text" value={props.title} className="note-form-title" placeholder="Add a title..."></input>
                </Grid>
                <Grid item xs={12} sm={5}>
                    <select value={props.category} className="note-form-category">
                        <option value="">Select Category</option>
                        <option vlaue="home">Home</option>
                        <option value="work">Work</option>
                        <option value="personal">Personal</option>
                    </select>
                </Grid>
            </Grid>
            <Grid container spacing={2} className="note-form-description-container">
                <Grid item xs={12} sm={7}>
                    <textarea className="note-form-description" value={props.description} placeholder="Add description..." />
                </Grid>
                <Grid item xs={1} sm={5}>
                </Grid>
            </Grid>

            <Grid container spacing={2} className="note-form-description-container">
                <Grid item xs={1} sm={9} >
                </Grid>
                <Grid item xs={12} sm={2} >
                    <Button 
                        className="note-form-cancel-btn" 
                        onClick={() => props.handleCancelClick()}
                    >
                        Cancel
                    </Button>
                </Grid>
                <Grid item xs={12} sm={1}>
                    <Button className="note-form-add-btn">{button}</Button>
                </Grid>
            </Grid>

        </Container>
    );
}

export default NoteForm;