
function myfun() {
    var valget = document.getElementById('cartnumber').value;
    localStorage.setItem("val", valget);
    return false;

}
var alrm = document.getElementById('qntys').value = localStorage.getItem("val");
var subtots = document.getElementById('subtot').innerHTML = "PKR " + alrm * (5580.00);
var tbtots = document.getElementById('grandtot').innerHTML = "PKR " + alrm * (5580.00);
    

function increseqny() {
    var qnty = document.getElementById('qntys').value;
    var subtots = document.getElementById('subtot').innerHTML = "PKR " + qnty * (5580.00);
    var tbtots = document.getElementById('grandtot').innerHTML = "PKR " + qnty * (5580.00);
}
var qnty = document.getElementById('qntys').value;





function myfun1() {
    var valget1 = document.getElementById('subtot').innerHTML;
    localStorage.setItem("textval", valget1);
    return false;

}
// var hes = document.getElementById('ssubtot').innerHTML= localStorage.getItem("textval");
// var hes = document.getElementById('grandbtot').innerHTML=localStorage.getItem("textval");
// var hes = document.getElementById('grandbtots').innerHTML=localStorage.getItem("textval");
