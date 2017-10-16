'use strict'
// ColumnOne code.
// Creates inputted number of elements, adds a random color as a 
// data attribute and adds an event listener for click
function createElements(N) {
  var liList = [];
  var ul = document.getElementById("elementList");

  for (var i = 0; i < N; i++) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("Click me!"));
    li.setAttribute("data-color", randomColor());
    liList.push(li);
    liList[i].addEventListener('click', clickResponse);
    ul.appendChild(liList[i]);
  }
};

// Changes text color on click.
function clickResponse(event) {
  var textColor = event.target.getAttribute("data-color");
  event.target.style.color = textColor;
}

// Creates random color for each li
function randomColor() {
  var letters = '0123456789ABCDEF';
  return '#XXXXXX'.replace(/(X)/g, function () {
    return letters[Math.floor(Math.random() * 16)]
  });
}


// ColumnTwo code.
// Click event for columnTwo button. Increments counter on click and 
// after 5 clicks removes button and adds success text.
(function () {
  var btn = document.getElementById('btn');
  var counter = 0;

  btn.onclick = function () {
    counter += 1;

    if (counter >= 5) {
      var columnTwo = document.getElementById("columnTwo");
      var successMessage = document.createElement("p");

      columnTwo.appendChild(document.createTextNode("You've successfully clicked 5 times!"));
      btn.className += "hidden";
    };

    btn.innerHTML = "Clicks: " + counter;
  };
})();