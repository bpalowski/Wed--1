/* it allows you to speak with somone */
$(document).ready(function(){
$("button#first_question").click(function(){
$("ul#you").prepend("<li>hello</li>");
});

$("button#second_question").click(function(){
  $("ul#me").prepend("<li>how are your doing this fine day</li>");

});
});
/* you ca change the back ground
$("ul#header").click(function(){
$  ('body').css('background-color', 'green');
$  ('body').toggle('background-color', 'none');
});
*//
