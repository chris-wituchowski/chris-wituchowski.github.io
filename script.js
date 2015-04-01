$(document).ready(function() {
  var previousContent = "#aboutcontent";
      $('#aboutbutton').hover(function() {
          $(this).css("background-color", "#00cc00");
          console.log(previousContent);
        },
        function() {
          $(this).css("background-color", "#FFFFFF");
      });
      $('#aboutbutton').click(function() {
        $('#aboutcontent').fadeToggle("slow");
        $(previousContent).fadeToggle("slow");
        previousContent = '#aboutcontent';
      });
      $('#infobutton').hover(function() {
        $(this).css("background-color", "#00cc00");
        console.log("resume hover");
      },
      function() {
        $(this).css("background-color", "#FFFFFF");
      });
      $('#workbutton').hover(
        function() {
          $(this).css("background-color", "#00cc00");
          console.log("about hover");
        },
        function() {
          $(this).css("background-color", "#FFFFFF");
      });
      $('#playbutton').hover(function() {
        $(this).css("background-color", "#00cc00");
        console.log("resume hover");
      },
      function() {
        $(this).css("background-color", "#FFFFFF");
      });
      $('#contactbutton').hover(function() {
        $(this).css("background-color", "#00cc00");
        console.log("resume hover");
      },
      function() {
        $(this).css("background-color", "#FFFFFF");
      });
      $('#contactbutton').click(function() {
        $('#contactcontent').fadeToggle("slow");
        $(previousContent).fadeToggle("slow");
        previousContent = '#contactcontent';
      });
});
