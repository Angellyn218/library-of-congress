var searchBoxEl = $('.form-control');
var searchBtn = $('.btn');
var formatDrpDwn = $('#inputGroupSelect02');

var searchResultEl = $('#results')

var searchString = searchBoxEl.val();

$('.btn').on('click', function () {
    var searchString = searchBoxEl.val();
    var format = formatDrpDwn.val();
    console.log(format);

    var apiURL = 'https://www.loc.gov/search/?q=' + searchString.trim() + '&' + format + '=' + '&fo=json'
    console.log(apiURL);

    fetch(apiURL.trim())
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    console.log('test log');
                    // fuctiong to get search result
                    // 
                    localStorage.setItem('search', JSON.stringify(data))
                    // document.location.replace('./search-results.html?q=sometingelsecanbeputinhere');
                    document.location.replace('./search-results.html');

                });

                
                // displayResults(data);

            } else {
                alert('Error', response.statusText);
            }
        })
        .catch(function (erro) {
            console.log('something went wrong')
        });

    

});

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
    // location.location.replace('./search-results.html');
}
