var bod = document.querySelector("body");
window.onresize = function(){
	bod.style.height = window.innerHeight;
	bod.style.width = window.innerWidth;
};

const commands = [ "find", "do", "hack", "set", "get", "mkdir", "ls" ];
const abc = "abcdefghijklmnopqrstuvwxyz";

var hacker = {
	main: function(C){
		C.WriteLine("Downloading every word ever");
		pullFile('words_alpha.txt', function(e){
			var words = e.split('\n');
			
			var myFunc = function(){
				var line = genPath(words, random(0, 8));
				line += commands.pickRandom() + ' ';
				line += genParams();
				C.WriteLine();
				
				console.log("Print");
				interval = setInterval(myFunc, random(1, 5) * 100);
			};
			var interval = setInterval(myFunc, random(1, 5) * 100);
		});
	}
};

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function genPath(words, depth){
	const heads = [ '$', '#', '>' ];
	
	var r = heads.pickRandom() + 'C:/';
	for (var i = 0; i < depth; i++) {
		r += words.pickRandom() + '/';
	}
	
	return r + ':';
}

function genParams(words, depth){
	var r = '';
	
	for (var i = 0; i < depth; i++) {
		switch (random(0, 3)) {
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