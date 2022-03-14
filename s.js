$(document).ready(function(){

   $("#accordion1").accordion();

});
$(document).ready(function(){

   $("#accordion2").accordion();
});
$(document).ready(function(){
$("#auto").autocomplete({source:$("ul").text().split("\n"), minLength:3});
});
$(document).ready(function(){
   $("#el1, #el2").button();
$("#el3").buttonset();
});
