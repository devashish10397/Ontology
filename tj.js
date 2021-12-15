var wikiBaseUrl = "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srlimit=10&srprop=snippet&callback=?&srsearch=";

$(document).ready(function() {
  
  // Submit and change .container-fluid CSS when button is clicked
  $("input:button").on("click", function() {
    if ($("input:text").val() === "") {
      $(".container-fluid").css({"top": "-10%", "bottom": "0"});      
      $(".all-result").empty();
      
    } else {
      $(".container-fluid").css({"top": "initial", "bottom": "initial"}).css({"top": "50px"});
      search();
    }
    
  });
  
  // Trigger click event on button when enter is pressed
  $("#txtSearch").keyup(function(event) {
    if (event.keyCode == 13) {
      $("#btnSearch").click();
    }
  });
    
  // Change colors if slider is active
  $("input[type=checkbox]").on("click", function() {
    if ($("body").hasClass("light-bg") == true) {
      $("body").removeClass("light-bg").addClass("dark-bg");
      $("p, #random a").removeClass("light-bg-text").addClass("dark-bg-text");
      $(".button, .button:hover, .button:focus").css({"background-color":"#e59900", "color":"#023968"});
      $(".entry").css("background", "#bfbfbf");
      $(".entry p").css("color", "#023968");
      
    } else {
      $("body").removeClass("dark-bg").addClass("light-bg");
      $("p, #random a").removeClass("dark-bg-text").addClass("light-bg-text");
      $(".button, .button:hover, .button:focus").css({"background-color":"#ba4810", "color":"#b3d5f2"});
      $(".entry").css("background", "white");
      $(".entry p").css("color", "#720019");

    }
  });
  
});

// Prevent page refresh when submitting input:text
$("#txtForm").submit(function () {
  return false;
});

function search() {
  var wikiApi = wikiBaseUrl;
  
  // Append search words to query
  var search = $("input:text").val();
  var strToArray = search.split('');
  
  for (var i = 0; i < strToArray.length; i++) {
    if (strToArray[i] === " ") {
      strToArray[i] = "+";
    }
  }
  search = strToArray.join("");
  
  wikiApi += search;
  
  // Get results from Wikipedia
  $.getJSON(wikiApi, function(json) {
    
    // Clear results pane
    $(".all-result").empty();
    
    // Iterate through each result then append to div.all-result
    var resultEntry = "";
    for (var i = 0; i < json.query.search.length; i++) {
      if (i == (json.query.search.length - 1)) {
        resultEntry = "<div class='result'><a href='https://en.wikipedia.org/?curid=" + json.query.search[i].pageid + "' target='_blank'><div class='entry last-entry'><p class='light-bg-text'><strong>" + json.query.search[i].title + "</strong><br><br>" + json.query.search[i].snippet + "</p></div></a></div>"
        
        $(".all-result").append(resultEntry);
        
      } else {
        resultEntry = "<div class='result'><a href='https://en.wikipedia.org/?curid=" + json.query.search[i].pageid + "' target='_blank'><div class='entry'><p class='light-bg-text'><strong>" + json.query.search[i].title + "</strong><br><br>" + json.query.search[i].snippet + "</p></div></a></div>"
        
        $(".all-result").append(resultEntry);
      }      
    }
    
    // Highlight hovered search result
    $(".all-result .result").hover(function() {
      $(this).find(".entry").stop(true,true).css("border-color", "red");
    },function() {
      $(this).find(".entry").css("border-color", "transparent");
    });    
  });
}