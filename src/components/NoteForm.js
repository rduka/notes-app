import React from 'react';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { connect } from "react-redux";
import addNote from '../actions/addNote';
import editNote from '../actions/editNote';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

function NoteForm(props) {

    //I did not want to use dhe redux state for onChange for these props... neither did i want to use a library to handle the form.
    //decided to use hooks instead.
    let note = props.id !== undefined ?
    {
        id: props.id, 
        title: props.title, 
        category: props.category,
        description: props.description
    }
    :
    {
        id: null, 
        title: "", 
        category: "",
        description: ""
    }

    const [form, setForm] = React.useState(note);
    let title = props.id === undefined ? "Add Note" : "Update Note";
    let button = props.id === undefined ? "Add" : "Update";
    const formControlStyle = {
        width: '100%'
    };

    const allowSubmit = form => {
        if(form.title === "" || form.description === "" || form.category === "") {
            return false
        }
        return true;
    };

    function handleSubmit(event) {
        event.preventDefault()

        if(form.id === undefined || form.id === null) {
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
                            <FormControl style={formControlStyle}>
                                <Select
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    value={form.category} name="category" 
                                    onChange={event => handleChange(event)} 
                                    className="note-form-category"
                                    disableUnderline={true}
                                    MenuProps={{
                                        anchorOrigin: {
                                          vertical: "bottom",
                                          horizontal: "left"
                                        },
                                        transformOrigin: {
                                          vertical: "top",
                                          horizontal: "left"
                                        },
                                        getContentAnchorEl: null
                                      }}
                                >
                                    <MenuItem value=""> Select Category </MenuItem>
                                    <MenuItem value={"home"}>Home</MenuItem>
                                    <MenuItem value={"work"}>Work</MenuItem>
                                    <MenuItem value={"personal"}>Personal</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} className="note-form-description-container">
                        <Grid item xs={12} sm={7}>
                            <textarea name="description" className="note-form-description" value={form.description} onChange={event => handleChange(event)} placeholder="Add description..." />
                        </Grid>
                        <Grid item xs={1} sm={5}>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2} className="note-form-footer-container">
                        <Grid item xs={12} sm={12} >
                            <Button 
                                className="note-form-cancel-btn" 
                                onClick={() => props.handleCancelClick()}
                            >
                                Cancel
                            </Button>

                            <Button 
                                type="submit" 
                                className="note-form-add-btn"
                                disabled={!allowSubmit(form)}
                            >
                                {button}
                            </Button>
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