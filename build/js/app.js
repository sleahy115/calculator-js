(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

var Calculator = require('./../js/calculator.js').calculatorModule;

$(document).ready(function() {
    $('.ping-pong').submit(function(event) {
        event.preventDefault();
        var newCalculator = new Calculator("hot pink");
        var number = $("#number").val();
        var output = newCalculator.pingPong(number);
        console.log(output);
        output.forEach(function(element) {
            $('#output').append("<li>" + element + "</li>");
        });
    });
});

},{"./../js/calculator.js":2}],2:[function(require,module,exports){

function Calculator (skin){
    this.skin = skin;
}

Calculator.prototype.pingPong = function(number) {
    var output = [];
    for (var i = 1; i <= number; i++) {
        if (i % 15 === 0) {
            output.push("ping-pong");
        } else if (i % 3 === 0) {
            output.push("ping");
        } else if (i % 5 === 0) {
            output.push("pong");
        } else {
            output.push(i);
        }
    }
    return output;
};

exports.calculatorModule = Calculator;

},{}]},{},[1]);