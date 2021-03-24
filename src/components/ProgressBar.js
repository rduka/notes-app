import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';

function ProgressBar(props) {
    
    const totalNumberOfNotes = props.notes.length;
    const numberOfNotesCompleted = props.notes.filter(note => note.completed).length;
    const completedNotesPercetage = (numberOfNotesCompleted / totalNumberOfNotes) * 100;
    const progress = isNaN(completedNotesPercetage) ? 0 : completedNotesPercetage;
    const message = progress == 100 ? "You have completed all notes" : `You have ${numberOfNotesCompleted}/${totalNumberOfNotes} notes completed`;

    return  (
        <div className="progress-bar-container">
            <label>{message}</label>
            <LinearProgress variant="determinate" value={progress} />
        </div>
    );
}

export default ProgressBar;