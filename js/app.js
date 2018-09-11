'use strict';

var game = prompt('Lets play a game! Answer yes or no, click ok!');
console.log(game.toUpperCase());
var gameresponse = 'Awesome lets start!';
var gameresponseno = 'Well lets give it a try anyway..';

if (game === 'yes') {
  alert(gameresponse);} else { alert(gameresponseno);
}


var born = prompt('Was I born in the state?');
console.log(born.toUpperCase());
var bornyes = 'Actually I was born in Venezuela';
var bornno = 'You are right I was born in Venezuela';

if (born === 'yes') {
  alert(bornyes);} else { alert(bornno); }


var music = prompt('Do I have music tatoos?');
console.log(music.toUpperCase());
var musicyes = 'Yes! I got them very late at night for no reason';
var musicno = 'I actually do, I have them on my left arm';

if (music === 'yes') {
  alert(musicyes);} else { alert(musicno); }


var running = prompt('Have I ever ran a Ultramarathon?');
console.log(running.toUpperCase());
var runningyes = 'I did... Never again';
var runningno = 'Once a long time ago I did, but like I said a long time ago';

if (running === 'yes') {
  alert(runningyes);} else { alert(runningno); }






