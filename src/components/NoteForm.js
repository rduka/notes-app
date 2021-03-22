import React from 'react';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { connect } from "react-redux";
import addNote from '../actions/addNote';
import editNote from '../actions/editNote';

function NoteForm(props) {

    //I did not want to use dhe redux state for onChange for these props... neither did i want to use a library to handle the form.
    //decided to use hooks instead.
    const [form, setForm] = React.useState({
        id: props.id, 
        title: props.title, 
        category: props.category,
        description: props.description
    });

    let title = props.id === undefined ? "Add Note" : "Update Note";
    let button = props.id === undefined ? "Add" : "Update";
    const formControlStyle = {
        width: '100%'
    };

    function handleSubmit(event) {
        event.preventDefault()

        if(form.id === undefined) {
            props.handleAddSubmit(form);
        }
        else {
            props.handleEditSubmit(form);
        }

        props.handleCancelClick(); //This dismisses the modal form.
    };

    function handleChange(event){
        let {name, value} = event.target;
        setForm(prevForm => ({
            ...prevForm,
            [name]: value
        }));
    }

    //console.log(form);

    return (
        <Container className="note-form-container" spacing={0} fixed>
            <form onSubmit={handleSubmit}>
                <FormControl style={formControlStyle}>
                    <Grid item xs={12} sm={12} className="form-title">
                        <h2>{title}</h2>
                    </Grid>
                    <Grid container spacing={2} className="note-form-title-container">
                        <Grid item xs={12} sm={7} >
                            <input type="text" name="title" value={form.title} onChange={event => handleChange(event)} className="note-form-title" placeholder="Add a title..."></input>
                        </Grid>
                        <Grid item xs={12} sm={5}>
                            <select value={form.category} name="category" onChange={event => handleChange(event)} className="note-form-category">
                                <option value="">Select Category</option>
                                <option vlaue="home">Home</option>
                                <option value="work">Work</option>
                                <option value="personal">Personal</option>
                            </select>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} className="note-form-description-container">
                        <Grid item xs={12} sm={7}>
                            <textarea name="description" className="note-form-description" value={form.description} onChange={event => handleChange(event)} placeholder="Add description..." />
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
                            <Button type="submit" className="note-form-add-btn">{button}</Button>
                        </Grid>
                    </Grid>
                </FormControl>
            </form>
        </Container>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleAddSubmit: (note)=> dispatch(addNote(note)),
        handleEditSubmit: (note)=> dispatch(editNote(note))
    }
}

export default connect(null, mapDispatchToProps)(NoteForm);