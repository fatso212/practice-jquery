
$(document).ready(function() {
  //event.preventDefault
  $(".text").addClass("welcome");
});
function myCallBack(){
  $(".text").show("slow");
}
$(".text").click(function(){
  $(".text").hide("slow", function() {
    myCallBack();
  })
});

console.log(location.href);
var txt_node = $(".text");
txt_node.each((item) =>  {
  console.log(item);
});

jQuery('div')
  .css('background-color', 'white')
  .css('padding', '5px')
  .css('color', 'black');


  posts = [];
  function addPost(post){
    post = document.getElementById("post_value").value
    posts.push(post)
    document.getElementById("all_posts").innerHTML += post;
  }

  document.getElementById("post")
  .addEventListener("click", addPost, false);
$('body').css('background-color', 'beige');

$("body .photo").css('height', '300px');


$(".font").click(function(){
  $(".font")
  .css('background-color', 'blue')
  .css('color', 'white');
});

$(".text").click(function(){
  $(".text")
    .css('background-color', 'green')
    .css('color', 'white');
});

$(".photo").click(function(){
  $(".photo")
    .css('background-color', 'purple')
    .css('color', 'white');
});
