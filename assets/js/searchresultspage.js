var displayResults = function (data) {
    // window.location.replace('./search-results.html');
    console.log(data);
    if (data.length === 0) {
        console.log('if block');
        searchResultEl.val('No search results');
        return;
    }

    console.log('outside for loop');
    for(var i = 0; i < data.results.length; i++) {
        console.log('for loop');
        var resultHeader = data.results[i].title;
        console.log(resultHeader);
        var resultEl = $('<div>');
        
        resultEl.text(resultHeader);

        $('#resultspage').append(resultEl);
        searchResultEl.append(resultEl);
        
    }
    // window.location.replace('./search-results.html');
}

data = JSON.parse(localStorage.getItem('search'));
console.log(data);

displayResults(data);
console.log('search result page');
