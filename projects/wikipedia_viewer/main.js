
$(document).ready (function () {
  
  $('#search').keyup(function () {
    var input = $('#search').val();
    var url = 'https://en.wikipedia.org/w/api.php?'
    + 'action=query&list=search&format=json&srprop=snippet'
    + '&srsearch=' + input + '&callback=?'; 

function displayResults(data) {
  var searchHTML= '<div id="main-section">';
    $.each(data.query.search, function (i, item) {
      searchHTML += '<div id="sub-section">';
      searchHTML += '<ul><li class="title">';
      searchHTML += '<a href="https://en.wikipedia.org/wiki/'+item.title+ '"'; 
      searchHTML +=' target="_blank">'+item.title+'</li></a>';
      searchHTML += '<li class="snippet">'+item.snippet+'...</li>';
      searchHTML += '</ul>';
      searchHTML += '</div>';

      
   //    console.log(i);
   //    console.log(input);
   //    console.log(item);
   //    console.log(item.title);
   //    console.log(item.snippet);
   }); 
   searchHTML += '</div>'; 
 $('#result').html(searchHTML);
};
    $.getJSON(url, displayResults);
  });   
});

