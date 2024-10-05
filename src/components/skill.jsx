import React from 'react';



const Skill = (props) => {

    
    const { titre, percentage } = props;


    
    return (
        <div className="skill-items">
            <p>{titre}</p>
            <div className="progress inner-shadow">
                <div className="progress-bar inner-shadow" style={{ width: `calc(${percentage} - 14px)` }}>
                    <span>{percentage}</span>
                </div>
            </div>
        </div>
    );

    
};

export default Skill;
