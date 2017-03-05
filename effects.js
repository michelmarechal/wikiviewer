var search, url;
function makeUrl(){
  url = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&requestid=&origin=*&search=" + search;
  return url;
}
function runSearch() {
  $("ul").empty();
  search = $("#searchBox").val().replace(/ /g,'').toLowerCase();
  if (search !== "") {
    makeUrl();
    $.get(url, function(data){
      for (var i = 0; i < data[1].length; i++) {
        $('<a class="wikiLink" href="' + data[3][i] + '" target="_blank"><li class="article"><h2>' + data[1][i] + '</h2><p>' + data[2][i] + '</p></li></a>').appendTo( "ul" );
      }
    });
  } else {
    alert("Please, write something in the searchbox");
  }
}
$(".btn-primary").click(function(){
  runSearch();
});
$("#searchBox").keydown(function(event){
    if(event.keyCode == 13) {
      runSearch();
    }
});
