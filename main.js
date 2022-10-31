var inputAddress = document.getElementById("input");
var array = [];

window.onload = (
    function submit() {
        array.push(inputAddress.value);
        console.log(array);
    }
);

function callarray() {
    return array;
}