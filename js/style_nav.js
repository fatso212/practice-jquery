function styleNav(id){
  document.getElementById(id).addEventListener
  ("click", function(){
      document.getElementById(id).style.backgroundColor = "blue";
    });
};
var id_array = ["text", "font", "photo"];
var i = 0;
while (i < id_array.length){
  styleNav(id_array[i]);
  i += 1;
}
