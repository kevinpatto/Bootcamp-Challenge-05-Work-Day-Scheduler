// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  var today = dayjs();
  var hour = today.hour();
  var mainEl = $("main");

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  
  // DONE: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  for (i = 0; i < 9; i++) {
    var containerEl = $("<div>");
    var hourEl = $("<div>");
    var textareaEl = $("<textarea>");
    var btnEl = $("<button>");
    var imgEl = $("<i>");

    containerEl.attr({
      class: "row time-block past",
      id: "hour-" + (i + 9)
    });

    if (i + 9 > hour) {
      containerEl.addClass("future");
    } else if (i + 9 < hour) {
      containerEl.addClass("past");
    } else {
      containerEl.addClass("present");
    }

    hourEl.attr({
      class: "col-2 col-md-1 hour text-center py-3",
      text: ""
    });

    if (i + 9 > 12) {
      hourEl.text((i + 9 - 12) + "PM");
    } else {
      hourEl.text((i + 9) + "AM");
    }

    textareaEl.attr({
      class: "col-8 col-md-10 description",
      rows: "3"
    });

    btnEl.attr({
      class: "btn saveBtn col-2 col-md-1",
      "aria-label": "save"
    });

    imgEl.attr({
      class: "fas fa-save",
      "aria-hidden": true
    });

    btnEl.append(imgEl);
    containerEl.append(hourEl, textareaEl, btnEl);  
    mainEl.append(containerEl);
  }

  // DONE: Add code to display the current date in the header of the page.
  $("#currentDay").text(today.format("MMMM DD, YYYY"));
});
