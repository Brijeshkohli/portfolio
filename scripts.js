
function check(msg){
	document.getElementById("show").innerHTML = msg;
}


let arg = false;
let myPromise = new Promise(function (resolve, reject){

if (arg){
	resolve("success");
}
else{
	reject("error");
}
});

console.log(myPromise);
myPromise.then(function(onFullfillment){
	check(onFullfillment);
});
myPromise.catch(function(onFullfillment){
	check(onFullfillment);
});