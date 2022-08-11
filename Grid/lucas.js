"use strict"

var DIA  = "[0123]?\d"; 
var _DE_ = "\s+de\s+";
var MES  = "[A-Za-z][a-zç]{1,8}";
var ANO  = "[12]\d{3}";

var stringRegex = DIA + _DE_ +  MES + _DE_ + ANO;

var objetoRegex  = new RegExp(stringRegex, 'g');

console.log(objetoRegex)