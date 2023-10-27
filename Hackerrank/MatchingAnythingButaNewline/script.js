//create the regex in the Regex_Pattern variable
var Regex_Pattern = /^\S{3}\.\S{3}\.\S{3}\.\S{3}$/g; //Do not delete '/' and 'g'. Replace __________ with your regex.



function processData(Test_String) {
    var matches = Test_String.match(Regex_Pattern);
    var match = matches != null && matches.length > 0;
    console.log(match);
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input.trim();
});

process.stdin.on("end", function () {
   processData(_input);
});