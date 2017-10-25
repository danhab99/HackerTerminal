var bod = document.querySelector("body");
window.onresize = function(){
	bod.style.height = window.innerHeight;
	bod.style.width = window.innerWidth;
};

const commands = [ "find", "do", "hack", "set", "get", "mkdir", "ls", "dick", "fuck", "masturbate" ];
const abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var hacker = {
	main: function(C){
		C.WriteLine("Downloading every word ever");
		
		var load = setInterval(function(){
			C.WriteLine(".");
		},500);
		
		pullFile('words_alpha.txt', function(e){
			clearInterval(load);
			var words = e.split('\n');
			const SPEED = 10;
			var speedWave = SPEED;
			
			var myFunc = function(){
				clearInterval(interval);
				var line = genPath(words, random(0, 10));
				line += commands.pickRandom() + ' ';
				line += genParams(words, random(1, 10));
				C.WriteLine(line.replace(/(\r\n|\n|\r)/gm,""));
				
				if (random(0, 10) === 0){
					C.Beep();
				}
				
				speedWave = --speedWave > 0 ? speedWave-- : SPEED;
				var l = random(1, speedWave) * random(1, 50);
				interval = setInterval(myFunc, l);
			};
			var interval = setInterval(myFunc, random(1, 10) * 100);
		});
	}
};

function random(min, max) {
  return parseInt(Math.random() * (max - min) + min);
}

function genPath(words, depth){
	const heads = [ '$', '#', '>' ];
	
	var r = heads.pickRandom() + ' ' + abc.pickRandom().toUpperCase() + ':/';
	for (var i = 0; i < depth; i++) {
		r += words.pickRandom() + '/';
	}
	
	return r + ':  ';
}

function genParams(words, depth){
	var r = '';
	
	for (var i = 0; i < depth; i++) {
		switch (parseInt(random(0, 3))) {
			case 0:
				r += "-" + abc.pickRandom();
				break;
			case 1:
				r += random(1000000, 9999999).toString(16);
				break;
			case 2:
				r += words.pickRandom();
				break;
			case 3:
				r += makeid();
				break;
			default:
				r += "dickbutt";
		}
		r += ' ';
	}
	return r;
}

Array.prototype.pickRandom = function(){
	return this[Math.floor(Math.random() * this.length)];
};

function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}