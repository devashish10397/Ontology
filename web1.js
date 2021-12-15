//_______________________________TRANSLATION eng-marathi__________________________


     // Load the Google Transliterate API
      google.load("elements", "1", {
            packages: "transliteration"
          });

      function onLoad() {
        var options = {
            sourceLanguage:
                google.elements.transliteration.LanguageCode.ENGLISH,
            destinationLanguage:
                [google.elements.transliteration.LanguageCode.MARATHI],
            //shortcutKey: 'ctrl+g',
            transliterationEnabled: true
        };

        // Create an instance on TransliterationControl with the required
        // options.
        var control =
            new google.elements.transliteration.TransliterationControl(options);

        // Enable transliteration in the textbox with id
        // 'transliterateTextarea'.
        control.makeTransliteratable(['transliterateTextarea']);
      }
      google.setOnLoadCallback(onLoad);
    
	






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
    var tras=false;
  // Change colors if slider is active
  $("input[type=checkbox]").on("click", function() {
    if ($("body").hasClass("light-bg") == true) {
		trans=true;
      
      
    } else {
      trans=false;

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
  
  

   
    
    // Highlight hovered search result
    $(".all-result .result").hover(function() {
      $(this).find(".entry").stop(true,true).css("border-color", "red");
    },function() {
      $(this).find(".entry").css("border-color", "transparent");
    });    
  });
}
