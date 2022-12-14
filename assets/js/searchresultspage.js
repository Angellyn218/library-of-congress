// function to dyanamically create html content from our search results
// todo: add any elements we need and set their values
var buildResult = function (resultData) {
  console.log(resultData);
  var sectionEl = $("<section>");
  sectionEl.addClass("card p-3 my-3");

  var resultSubjectHeader = $("<h4>");
  resultSubjectHeader.text(resultData.subject);

  var dateEl = $("<p>");
  dateEl.val(resultData.date);

  var resultSubjectTags = $("<p>");
  resultSubjectTags.text(resultData.contributor);

  //Anchor element<a> is assigned to the Read More buttons.
  var btnEl = $("<a>");
  btnEl.attr("href", resultData.url);
  btnEl.attr("id", "read-more");
  btnEl.addClass("btn btn-dark w-25");
  btnEl.text("Read More");
  // $(selector).attr(attributeName, value);

  sectionEl.append(resultSubjectHeader);
  sectionEl.append(dateEl);
  sectionEl.append(resultSubjectTags);
  sectionEl.append(btnEl);

  $("#resultsDiv").append(sectionEl);
};

// when the page loads grab our search results stored in local storage from our index.html
//
var resultsData = JSON.parse(localStorage.getItem("search"));
console.log(resultsData.results);

// feed our search results into the function to dynamically create html objects
var showResults = function (resultData) {
  for (var i = 0; i < resultData.results.length; i++) {
    // console.log(resultData.results[i]);
    buildResult(resultData.results[i]);
  }
};

showResults(resultsData);
