var projects = [
  {
    titre: "School Management Web Application",
    thumb: "img/images/GestionEtablissement/thumb.jpg",
    images:
      "img/images/GestionEtablissement/thumb.jpg,img/images/GestionEtablissement/1.jpg,img/images/GestionEtablissement/2.jpg,img/images/GestionEtablissement/3.jpg,img/images/GestionEtablissement/4.jpg,img/images/GestionEtablissement/5.jpg",
    description:
      "Application to Manage Interns and Instructors, Their Absences, Module Assignments to Instructors, Create Schedules; Accessible by Three User Roles (Administrators, surveillance, teachers).",
    Tools: "HTML5, CSS3, Bootstrap5, JavaScript, Ajax, PHP, MySQL ",
    siteweb: "",
    codesource: "",
  },
  {
    titre: "Web Application for Car Repair Management",
    thumb: "img/images/GestionReparation/thumb.jpg",
    images:
      "img/images/GestionReparation/thumb.jpg,img/images/GestionReparation/1.jpg,img/images/GestionReparation/2.jpg,img/images/GestionReparation/3.jpg",
    description:
      "Application to Manage Customers and Their Vehicles, Handle Repairs, Generate PDF Invoices, Import Data from Excel Format.",
    Tools: "HTML5, CSS3, Bootstrap5, JavaScript, Ajax, PHP, MySQL ",
    siteweb: "",
    codesource: "",
  },
  {
    titre: "E-commerce Website (Laptop Sales)",
    thumb: "img/images/PCZone/thumb.jpg",
    images:
      "img/images/PCZone/thumb.jpg,img/images/PCZone/1.jpg,img/images/PCZone/2.jpg,img/images/PCZone/3.jpg,img/images/PCZone/4.jpg,img/images/PCZone/5.jpg",
    description:
      "Explore a wide range of laptops for sale on our website. Find the perfect match for your computing needs.",
    Tools: "HTML5, CSS3 , Bootstrap5, React.js, Redux",
    siteweb: "https://pczone.netlify.app",
    codesource: "https://github.com/BilalDaoudi/PCZone",
  }, 
  {
    titre: "Sudoku Challenge",
    thumb: "img/images/Sudoku/thumb.jpg",
    images:
      "img/images/Sudoku/thumb.jpg,img/images/Sudoku/1.jpg,img/images/Sudoku/2.jpg",
    description:
      "Dive into the classic puzzle world with our Sudoku game! Sharpen your mind and tackle various levels of difficulty using HTML5, CSS3, and Javascript. Enjoy hours of engaging gameplay and enhance your logical thinking.",
    Tools: "HTML5, CSS3, JavaScript",
    siteweb: "https://gamesudoku.netlify.app",
    codesource: "https://github.com/BilalDaoudi/Sudoku-game",
  },
  {
    titre: "Text-to-Speech",
    thumb: "img/images/Text/thumb.jpg",
    images: "img/images/Text/thumb.jpg,img/images/Text/1.jpg",
    description:
      "Experience the power of language transformation on our website. Easily type and hear your text spoken in both French and English. Embrace seamless communication using HTML5, CSS3, and JavaScript. Enhance your language journey with this interactive tool.",
    Tools: "HTML5, CSS3, JavaScript",
    siteweb: "https://textintovoice.netlify.app",
    codesource: "https://github.com/BilalDaoudi/Text-to-Speech",
  },
  {
    titre: "Tic-Tac-Toe Showdown",
    thumb: "img/images/TicTacToe/thumb.jpg",
    images: "img/images/TicTacToe/thumb.jpg,img/images/TicTacToe/1.jpg",
    description:
      "Enjoy the classic Tic-Tac-Toe game on our website. Invite friends for some friendly competition. Just pure strategy and fun. Dive into nostalgic gameplay with HTML5, CSS3, and JavaScript.",
    Tools: "HTML5, CSS3, JavaScript",
    siteweb: "https://jeuxo.netlify.app",
    codesource: "https://github.com/BilalDaoudi/Tic-Tac-Toe",
  },
  {
    titre: "Stopwatch: Measure Time with Precision",
    thumb: "img/images/Chronometre/thumb.jpg",
    images:
      "img/images/Chronometre/thumb.jpg,img/images/Chronometre/1.jpg,img/images/Chronometre/2.jpg",
    description:
      "Explore our digital stopwatch for accurate timekeeping. Whether for workouts, cooking, or productivity, our user-friendly chronometer, built using HTML5, CSS3, and JavaScript, helps you manage time effectively. Start tracking time effortlessly!",
    Tools: "HTML5, CSS3, JavaScript",
    siteweb: "https://daoudichrono.netlify.app",
    codesource: "https://github.com/BilalDaoudi/Stopwatch",
  },
  {
    titre: "Sliding Puzzle Challenge",
    thumb: "img/images/Taquin/thumb.jpg",
    images: "img/images/Taquin/thumb.jpg",
    description:
      "Engage your brain with our interactive sliding puzzle featuring numbers 1 to 8. Rearrange the tiles to solve the puzzle while enhancing your spatial skills. Just your strategy and logic. Enjoy the brain-teasing experience built using HTML5, CSS3, and JavaScript..",
    Tools: "HTML5, CSS3, JavaScript",
    siteweb: "https://taquin.netlify.app",
    codesource: "https://github.com/BilalDaoudi/Taquin",
  },
];

function Projects() {
  let rowsprojects = document.getElementById("projects");
  let html = "";
  projects.map((p) => {
    html += ` <div class="portfolio-item" data-category="">
                  <div class="portfolio-item-inner outer-shadow">
                      <div class="portfolio-item-img"><img src="${p.thumb}" alt="project" data-screenshots="${p.images}">
                          <span class="view-project">Image view</span>
                      </div>
                      <p class="portfolio-item-title">${p.titre}</p>
                      <div class="portfolio-item-details">
                          <div class="row">
                              <div class="description">
                                  <h3>Project Brief:</h3>
                                  <p>${p.description}</p>
                              </div>
                              <div class="info">
                                  <h3>Project info</h3>
                                  <ul>
                                      <li>Tools - <span>${p.Tools}</span></li>`;
                  if (p.siteweb != "")
                  html += `<li>Live view <span><a target="_blank" href=${p.siteweb}>click me</a></span></li>`;
                  if (p.codesource
                     != "")
                  html += `<li>source Code <span><a target="_blank"  href=${p.codesource}>click me</a></span></li>`;
                  html += `</ul>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>`;
  });
  rowsprojects.innerHTML = html;
}
Projects();
