var educations = [
    {date : "2021 - 2023" , titre : "Diploma in digital developmenty" , description : "Diploma of specialized technician in digital development,specializing in full stack web, from the Institute of Applied Technology (ISTA) in Nador." },
    {date : "2020-2021" , titre : "General Economics" , description : "Student at the Multidisciplinary Faculty of Nador, majoring in General Economics." },
    {date : "2019-2020" , titre : "Baccalaureate" , description : "Baccalaureate in Life and Earth Sciences from Taha Hussein High School in Jaadar Zegangan, Nador." },
]

function Educations(){
    let rowsducation = document.getElementById("educations");
    let html = "";
    
    educations.map(e => html += 
        `<div class="timeline-item">
        <div class="timeline-item-inner outer-shadow">
            <i class="fas fa-graduation-cap icon"></i>
            <span>${e.date}</span>
            <h3>${e.titre}</h3>
            <h4>${e.description} </h4>
        </div>
    </div>`);
    rowsducation.innerHTML = html;
    
}

Educations();
