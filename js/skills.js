var skills = [
    {titre : "HTML" , percentage : "95%" },
    {titre : "CSS / Bootstrap" , percentage : "85%" },
    {titre : "JavaScript" , percentage : "80%" },
    {titre : "React.js" , percentage : "90%" },
    {titre : "PHP" , percentage : "90%" },
    {titre : "Laravel" , percentage : "80%" },
    {titre : "MySQL" , percentage : "95%" },
    {titre : "MongoDB" , percentage : "85%" },
    {titre : "Pyton (basic)" , percentage : "70%" },
    {titre : "Git / Github" , percentage : "80%" },
    {titre : "WordPress" , percentage : "80%" },
    {titre : "Figma" , percentage : "80%" },
    {titre : "UML" , percentage : "85%" },
    {titre : "Gantt Project" , percentage : "85%" },
    {titre : "Docker" , percentage : "70%" },
    {titre : "SonarQube" , percentage : "85%" },
]

function Skills(){
    let rowskill = document.getElementById("skills");
    let html = "";
    skills.map(s => html += 
        `<div class="skill-items">
            <p>${s.titre}</p>
            <div class="progress inner-shadow">
                <div class="progress-bar inner-shadow" style="width: calc(${s.percentage} - 14px)">
                    <span>${s.percentage}</span>
                </div>
            </div>
        </div>`);
    rowskill.innerHTML = html;
    
}

Skills();