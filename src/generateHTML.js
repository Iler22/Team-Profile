const generateCards = (team) => {
  const html = [];

  const managerCard = (manager) => {
    let managerHTML = `<div class="card" style="width: 18rem;">
      <div class="card-header">
       ${manager.name} <br/>
          <i class="fas fa-clipboard"></i>
          Manager
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${manager.id}</li>
        <li class="list-group-item">Email: <span><a href='mailto:${manager.email}' target='_blank'>${manager.email}</a></span></li>
        <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
      </ul>
      </div>
`;
    html.push(managerHTML);
  };

  const engineerCard = (engineer) => {
    let engineerHTML = `<div class="card" style="width: 18rem;">
      <div class="card-header">
       ${engineer.name} <br/>
         <i class="fas fa-tools"></i>
         Engineer
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${engineer.id}</li>
        <li class="list-group-item">Email: <span><a href='mailto:${engineer.email}' target='_blank'>${engineer.email}</a></span></li>
        <li class="list-group-item">GitHub: <a target="_blank" href="https://github.com/${engineer.gitHub}">${engineer.gitHub}</a></li>
      </ul>
      </div>
`;
    html.push(engineerHTML);
  };

  const internCard = (intern) => {
    let internHTML = `<div class="card" style="width: 18rem;">
      <div class="card-header">
        ${intern.name}<br/>
          <i class="fas fa-user-graduate"></i>
          Intern
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${intern.id}</li>
        <li class="list-group-item">Email: <span><a href='mailto${intern.email}' target='_blank'>${intern.email}</a></span></li>
        <li class="list-group-item">School: ${intern.school}</li>
      </ul>
      </div>
`;
    html.push(internHTML);
  };

  for (let i = 0; i < team.length; i++) {
    if (team[i].getRole() === 'Manager') {
      managerCard(team[i]);
    }
    if (team[i].getRole() === 'Engineer') {
      engineerCard(team[i]);
    }
    if (team[i].getRole() === 'Intern') {
      internCard(team[i]);
    }
  }

  return html.join('');
};

module.exports = (team) => {
  return `
    
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <link rel="stylesheet" href="../dist/style.css" />
    <title>Team Profile generator</title>
  </head>
  <body>
  <header class='jumbotron text-center'>
      <h1>Team Profile</h1>
    </header>

    <main> ${generateCards(team)} </main>
  
    <script src="./src/index.js"></script>
  </body>
</html>

      
    
    `;
};
