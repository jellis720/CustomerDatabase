for (let i = 0; i < customers.results.length; i++) {

  let box = document.createElement("div");
  const content = `
  <ul class="personBlock">
    <li class="image"><img src="${customers.results[i].picture.large}"></li>
    <li class="nameHeader">${customers.results[i].name.first} ${customers.results[i].name.last}</li>
    <li class="email"><a href=${customers.results[i].email$}">${customers.results[1].email}</a></li>
    <br>
    <li class = "address">${customers.results[i].location.street}</li>
    <li class = "address">${customers.results[i].location.city}, ${customers.results[i].location.state}, ${customers.results[i].location.postcode}</li>
    <li class= "phone">${customers.results[i].phone}</li>
    <br>
    <li id= "ssNum">${customers.results[i].id.value}</li>
  </ul>
`



let main = document.querySelector('.main');

box.innerHTML+=content;


main.appendChild(box);

}

var blur = document.getElementById("ssNum");
