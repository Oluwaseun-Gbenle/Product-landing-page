$(function() {
    $('#active').addClass('active');
   $('.nav-link').click(function() {
    $('.nav-link').removeClass('active');
     $(this).addClass('active');
   });
});
