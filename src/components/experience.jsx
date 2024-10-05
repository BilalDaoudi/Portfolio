import React from 'react';

const Experience = (props) => {
    const { date, titre, description } = props;

    return (
        <div className="timeline-item">
            <div className="timeline-item-inner outer-shadow">
                <i className="fas fa-briefcase icon"></i>
                <span>{date}</span>
                <h3>{titre}</h3>
                <h4>{description}</h4>
            </div>
        </div>
    );
};

export default Experience;
