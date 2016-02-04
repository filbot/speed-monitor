var sheetId = '1nDkGjZ3o0LpZkKBJ_n9MRrmIKzrlay9tVzovjkytEaE',
    dataUrl = 'https://spreadsheets.google.com/feeds/list/' + sheetId + '/1/public/values?alt=json';

$.getJSON( dataUrl, function( data ) {
  var items = [];

  console.log(data.feed.entry[0]);

  $.each( data.feed.entry, function( key, val ) {
    items.push( "<li id='ping'>" + val['gsx$_cokwr']['$t'] + "</li>" );
    items.push( "<li id='down'>" + val['gsx$_cpzh4']['$t'] + "</li>" );
    items.push( "<li id='up'>" + val['gsx$_cre1l']['$t'] + "</li>" );
  });

  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "body" );
});
