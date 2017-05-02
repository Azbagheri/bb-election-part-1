$(document).ready(function() {

$.ajax({
  url: 'https://bb-election-api.herokuapp.com/',
  method: 'GET',
  dataType: 'json'
}).done(function(data){

    $('<div>').appendTo('body');
    $('div').addClass('candidate');
    $('<ul>').attr('id', 'candidate_list').appendTo('.candidate');

    var candids = data['candidates'];
    debugger;
    for(i = 0; i < candids.length; i++){
      var vote = candids[i]['votes'].toString();
      $('<li>').html('Name: ' + candids[i]['name'] + ', Votes:' + vote  ).appendTo('#candidate_list');
    }
});

});
