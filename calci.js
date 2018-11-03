var str = "";
var res = 0;
var flag = 0;
var res2 = 0;
function input1() {
    str += 1;
    document.getElementById( 'output' ).innerHTML = str;
}
function input2() {
    str += 2;
    document.getElementById( 'output' ).innerHTML = str;
}
function input3() {
    str += 3;
    document.getElementById( 'output' ).innerHTML = str;
}
function input4() {
    str += 4;
    document.getElementById( 'output' ).innerHTML = str;
}
function input5() {
    str += 5;
    document.getElementById( 'output' ).innerHTML = str;

}
function input6() {
    str += 6;
    document.getElementById( 'output' ).innerHTML = str;
}
function input7() {
    str += 7;
    document.getElementById( 'output' ).innerHTML = str;
}
function input8() {
    str += 8;
    document.getElementById( 'output' ).innerHTML = str;
}
function input9() {
    str += 9;
    document.getElementById( 'output' ).innerHTML = str;
}
function input0() {
    str += 0;
    document.getElementById( 'output' ).innerHTML = str;
}
function inputMult(){
    res = parseInt(str);
    flag = 0;
    str = "";
    document.getElementById( 'output' ).innerHTML = 'Multiply';
}
function inputM(){
    res = parseInt(str);
    flag = 2;
    str = "";
    document.getElementById( 'output' ).innerHTML = 'Minus';
}
function inputP(){
    res = parseInt(str);
    flag = 1;
    str = "";
    document.getElementById( 'output' ).innerHTML = 'Plus';
}
function inputD(){
    res = parseInt(str);
    flag = 3;
    str = "";
    document.getElementById( 'output' ).innerHTML = 'Divide';
}
function inputE(){
    res2 = parseInt(str);
    if(flag == 0){
        res = res*res2;
    }
    if(flag == 1){
        res = res + res2
    }
    if(flag == 2){
        if(res > res2)
        res = res - res2;
        else
        console.log("Error!!!!!!!!!")
    }    
    if(flag == 3){
        res = res/res2;
    }
    console.log(res);
    document.getElementById( 'output' ).innerHTML = res;
}
function inputAC(){
    str ="";
    document.getElementById('output').innerHTML = 'Output Screen';
}
function inputCancel(){
    str = str.substring(0, str.length - 1);
    if(str.length)
    document.getElementById( 'output' ).innerHTML = str;
    else
    document.getElementById( 'output' ).innerHTML = 'Output Screen';
}
console.log(str);