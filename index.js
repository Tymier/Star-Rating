$(document).ready(function(){
$('#star1').click(function() {
   $(".fas fa-star").css("color", "black");
   $('#star1').css("color", "gold");
});
$('#star2').click(function() {
    $(".fas fa-star").css("color", "black");
    $('#star1, #star2').css("color", "gold");
});
$('#star3').click(function() {
    $(".fas fa-star").css("color", "black");
    $('#star1, #star2, #star3').css("color", "gold");
});
$('#star4').click(function() {
    $(".fas fa-star").css("color", "black");
    $('#star1, #star2, #star3, #star4').css("color", "gold");
});
$('#star5').click(function() {
    $(".fas fa-star").css("color", "black");
    $('#star1, #star2, #star3, #star4, #star5').css("color", "gold");
});
});