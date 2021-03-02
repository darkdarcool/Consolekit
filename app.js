const sleepf = ms => new Promise(r => setTimeout(r, ms));
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
};
async function sp(str){
	for(let i = 0; i < str.length; i++){
		await sleepf(60);
  	process.stdout.write(str[i]);
	};
};
function die(reason) {
    throw new Error(reason);
};

let red = "\x1B[31m";
let blue = "\x1B[34m";
let bold = "\x1B[1m";
let reset = "\x1B[0m";
let green = "\x1B[32m";
let yellow = '\x1b[33m';