/*
var hello_recursive =
window.setInterval(function(){
  document.write("hello");
}, 500);
if (window.document.innerHTML === "hello"){
clearInterval(hello_recursive);
}
*/
setTimeout(
  function(){
    document.write("hello");
  }, 10000);
