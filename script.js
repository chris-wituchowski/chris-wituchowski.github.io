$(document).ready(function() {
      $('#about').hover(
        function() {
          $(this).css("background-color", "#00cc00");
          console.log("about hover");
        },
        function() {
          $(this).css("background-color", "#FFFFFF");
      });
      $('#info').hover(function() {
        $(this).css("background-color", "#00cc00");
        console.log("resume hover");
      },
      function() {
        $(this).css("background-color", "#FFFFFF");
      });
      $('#work').hover(
        function() {
          $(this).css("background-color", "#00cc00");
          console.log("about hover");
        },
        function() {
          $(this).css("background-color", "#FFFFFF");
      });
      $('#play').hover(function() {
        $(this).css("background-color", "#00cc00");
        console.log("resume hover");
      },
      function() {
        $(this).css("background-color", "#FFFFFF");
      });
      $('#contact').hover(function() {
        $(this).css("background-color", "#00cc00");
        console.log("resume hover");
      },
      function() {
        $(this).css("background-color", "#FFFFFF");
      });
});
