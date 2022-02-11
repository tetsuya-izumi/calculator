var number = document.getElementById('box')
var calc_origin = number.value

var button = document.getElementById('plus_button')
button.addEventListener('click', function () {
    calc_origin += 1;
    console.log(calc_origin);
});
