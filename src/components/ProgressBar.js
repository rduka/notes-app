import React from 'react';

function ProgressBar(props) {
    
    const totalNumberOfNotes = props.notes.length;
    const numberOfNotesCompleted = props.notes.filter(note => note.completed).length;
    const completedNotesPercetage = (numberOfNotesCompleted / totalNumberOfNotes) * 100;
    const barPercentage = {
        width: `${isNaN(completedNotesPercetage) ? 0 : completedNotesPercetage}%`
    };

    return  (
        <div className="progress-bar-container">
            <label>You have {numberOfNotesCompleted}/{totalNumberOfNotes} notes completed</label>
            <span className="progress-bar-underlayer"></span>
            <span className="progress-bar" style={barPercentage}></span>
        </div>
    );
}

export default ProgressBar;