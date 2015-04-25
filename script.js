$(document).ready(function() {
  $('#resume-content').hide();
  $('#contact-content').hide();

  console.log("ready");
  var previousContent = "about";
  function showHide(navDescriptor) {
    if (previousContent != (navDescriptor)) {
      //$('#' + navDescriptor + '-content').removeClass("hidden");
      $('#' + navDescriptor + '-content').show("fast");
      //$('#' + previousContent + '-content').addClass("hidden");
      $('#' + previousContent + '-content').hide("fast");
      previousContent = navDescriptor;
      console.log("test " + navDescriptor);
    }
  }
      $('#about-button').click(function() {
        showHide('about');
      });
      $('#resume-button').click(function() {
        showHide('resume');
      });
      $('#contact-button').click(function() {
        showHide('contact');
      });
});
