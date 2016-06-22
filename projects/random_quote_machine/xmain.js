

$(document).ready(function() { 



// http://api.jquery.com/jquery.getjson/#jsonp
$('#quoteGETJSON').click(function() {
  $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?")
    .done(update);
    // .fail(handleErr);
});

$('#quoteAJAX').click(function() {
  $.ajax({
      url: "http://api.forismatic.com/api/1.0/",
      jsonp: "jsonp",
      dataType: "jsonp",
      data: {
        method: "getQuote",
        lang: "en",
        format: "jsonp"
      }
    });
    // .done(update);
    // .fail(handleErr);
});

function update(response) {
  $('#log').prepend('<pre>' + $('#response').html() + '</pre>');
  $('#response').html(JSON.stringify(response));

  // $('#response2').html(response);


};

function handleErr(jqxhr, textStatus, err) {
  console.log("Request Failed: " + textStatus + ", " + err);
};

// function success(json){
   // $('#response2').html(json.textAuthor);
// };
   
// console.log("All is well");



}); 