const container = document.getElementById("table");
var x = 1;
var request = new XMLHttpRequest();
request.open("GET", "https://corona.lmao.ninja/countries", true);
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.forEach(corona => {
      const tableRow = document.createElement("tr");
      container.appendChild(tableRow);

      const sn = document.createElement("td");
      sn.textContent = x;
      tableRow.appendChild(sn);
      x += 1;
      const tableHead = document.createElement("th");
      tableHead.setAttribute("class", "card");
      tableHead.textContent = corona.country;
      tableRow.appendChild(tableHead);

      //const country = document.createElement("h1");
      // tableHead.appendChild(country);

      const tableData = document.createElement("td");
      var cases = document.createElement("h3");
      cases.textContent = corona.cases;
      tableRow.appendChild(tableData);
      tableData.appendChild(cases);

      const tableData2 = document.createElement("td");
      var deaths = document.createElement("h3");
      deaths.textContent = corona.deaths;
      tableRow.appendChild(tableData2);
      tableData2.appendChild(deaths);

      const tableData3 = document.createElement("td");
      var todayDeath = document.createElement("h3");
      todayDeath.textContent = corona.todayDeaths;
      tableRow.appendChild(tableData3);
      tableData3.appendChild(todayDeath);

      const tableData4 = document.createElement("td");
      var recovered = document.createElement("h3");
      recovered.textContent = corona.recovered;
      tableRow.appendChild(tableData4);
      tableData4.appendChild(recovered);

      //   const p = document.createElement("p");
      //   movie.description = movie.description.substring(0, 300);
      //   p.textContent = `${movie.description}...`;

      //   card.appendChild(p);
    });
  } else {
    const errorMessage = document.createElement("Roshan");
    errorMessage.textContent = `I did not get the data`;
    app.appendChild(errorMessage);
  }
};

request.send();
