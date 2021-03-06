$(document).ready(function() {
  $('#resume-content').hide();
  $('#contact-content').hide();
  $('#personal-content').hide();
  console.log("ready");
  var previousContent = "about";
  function showHide(navDescriptor) {
    if (previousContent != (navDescriptor)) {
      $('#' + navDescriptor + '-content').addClass("active");
      $('#' + navDescriptor + '-content').show("fast");
      $('#' + previousContent + '-content').removeClass("active");
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
      $('#personal-button').click(function() {
        showHide('personal');
      });
      $('#contact-button').click(function() {
        showHide('contact');
      });
});
