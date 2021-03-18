import React from 'react';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

function NoteItem(props) {
    return (
        <Grid item xs={12} sm={6}>
            <div className="note-item-container">
                <div className="note-item-content">
                    <Checkbox
                        defaultChecked
                        color="default"
                        inputProps={{ 'aria-label': 'checkbox with default color' }}
                        className="note-item-chbx"
                    /> 
                    <label className="note-item-title">Meeting with Jon</label>
                    <EditIcon className="note-edit-icon" />
                    <DeleteIcon className="note-delete-icon" />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                    </p>
                    <label className="note-item-date">
                        Jan 31, 2021
                    </label>
                </div>
            </div>
        </Grid>
    );
}

export default NoteItem;