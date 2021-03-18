import React from 'react';

function ProgressBar() {
    return  (
        <div className="progress-bar-container">
            <label>You have 0/4 notes completed</label>
            <span className="progress-bar-underlayer"></span>
            <span className="progress-bar"></span>
        </div>
    );
}

export default ProgressBar;