$(document).ready(function() {
  //global variables to call within functions
  var quote;
  var speaker;

  function getNewQuote() {
    // an ajax is an api request
    $.ajax({
      // add the root url for the site we are making the request of
      url: 'http://api.forismatic.com/api/1.0/',
      jsonp: 'jsonp', // use jsonp to bypass the browser's security features
      dataType: 'jsonp',
      data: {
        method: 'getQuote',
        format: 'jsonp',
        lang: 'en'
      },

      success: function(response) {
        quote = response.quoteText;
        speaker = response.quoteAuthor;
        $('#quote').text(quote);

        if (speaker) {
          $('#speaker').text(speaker);
        } else {
          $('#speaker').text('Anonymous');
        };

      }
    });

  }

  $('#button').on('click', function() {
    getNewQuote();
  });

  //https://dev.twitter.com/web/tweet-button  Twitter Docs
  $('#tweet').on('click',function(){
    window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(quote + ' ~ ' + speaker)
  )});

});
