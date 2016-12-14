var ekranas = document.getElementById('ekranas');
var pirmasDaug;
var skaicius = function(skaitmuo) {
  ekranas.value += skaitmuo;
  console.log(ekranas.value);
};
//console.console.log(this);
var daugyba = function() {
pirmasDaug = ekranas.value;
ekranas.value = null;
console.log(pirmasDaug);
};

var rezultatas = function(){

};
