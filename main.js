var ekranas = document.getElementById('ekranas');
var skaicius = function(skaitmuo) {
  ekranas.value += skaitmuo;
  console.log(ekranas.value);
};
//console.console.log(this);
var daugyba = function() {
var pirmasDaug = ekranas.value;
ekranas.value = null;
console.log(pirmasDaug);
};
