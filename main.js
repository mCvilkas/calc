var ekranas = document.getElementById('ekranas');
var pirmasDaug;

var duomenys = {
  skaicius1: 100,
  skaicius2: 200,
  skaicius3: 333,
  skaicius4: 555

};

var duomenys2 = JSON.parse('{"skaicius1": 100, "skaicius2": 200, "skaicius3": 333, "skaicius4": 555}') ;

console.log(duomenys2);

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
ekranas.value = pirmasDaug * ekranas.value;
};

var sandauga = function() {
  ekranas.value = duomenys.skaicius1 * duomenys.skaicius2;
};
sandauga();
