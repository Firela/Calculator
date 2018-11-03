var str = "";
var res = 0;
var flag = 0;
var res2 = 0;
function input1() {
    str += 1;
}
function input2() {
    str += 2;
}
function input3() {
    str += 3;
}
function input4() {
    str += 4;
}
function input5() {
    str += 5;

}
function input6() {
    str += 6;
}
function input7() {
    str += 7;
}
function input8() {
    str += 8;
}
function input9() {
    str += 9;
}
function input0() {
    str += 0;
}
function inputMult(){
    res = parseInt(str);
    flag = 0;
    str = "";
}
function inputM(){
    res = parseInt(str);
    flag = 2;
    str = "";
}
function inputP(){
    res = parseInt(str);
    flag = 1;
    str = "";
}
function inputD(){
    res = parseInt(str);
    flag = 3;
    str = "";
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
console.log(str);