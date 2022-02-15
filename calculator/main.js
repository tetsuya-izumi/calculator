var plus = document.getElementById('plus_button')
var minus = document.getElementById('minus_button')
var multi = document.getElementById('multi_button')
var divide = document.getElementById('divide_button')

///////////////////////////////////////////////// 足し算

    // 要素を生成する
    var p = document.createElement('p');
    p.innerHTML = 'new element';
    
    // DOMに組み込む
    var d = document.getElementById('div1');
    
plus.addEventListener('click', function () {
    var number1 = document.getElementById('num1')
    var number2 = document.getElementById('num2')

    // 入力された値を十進数の数値として扱う
    var calc_origin1 = parseInt(number1.value, 10)
    var calc_origin2 = parseInt(number2.value, 10)

    // 数値1と数値2を計算
    var plus_result = calc_origin1 + calc_origin2;

    // 表示
    console.log(plus_result);
    document.getElementById('result').innerHTML = plus_result;

    const aaa = document.getElementById('plus_button')
    aaa.addEventListener('click', function () {
    d.appendChild(p);
      });
});

///////////////////////////////////////////////// 引き算
minus.addEventListener('click', function () {
    var number1 = document.getElementById('num1')
    var number2 = document.getElementById('num2')

    // 入力された値を十進数の数値として扱う
    var calc_origin1 = parseInt(number1.value, 10)
    var calc_origin2 = parseInt(number2.value, 10)

    // 数値1と数値2を計算
    var minus_result = calc_origin1 - calc_origin2;

    // 表示
    console.log(minus_result);
    document.getElementById('result').innerHTML = minus_result;
});

///////////////////////////////////////////////// 掛け算
multi.addEventListener('click', function () {
    var number1 = document.getElementById('num1')
    var number2 = document.getElementById('num2')

    // 入力された値を十進数の数値として扱う
    var calc_origin1 = parseInt(number1.value, 10)
    var calc_origin2 = parseInt(number2.value, 10)

    // 数値1と数値2を計算
    var multi_result = calc_origin1 * calc_origin2;

    // 表示
    console.log(multi_result);
    document.getElementById('result').innerHTML = multi_result;
});

///////////////////////////////////////////////// 割り算
divide.addEventListener('click', function () {
    var number1 = document.getElementById('num1')
    var number2 = document.getElementById('num2')

    // 入力された値を十進数の数値として扱う
    var calc_origin1 = parseInt(number1.value, 10)
    var calc_origin2 = parseInt(number2.value, 10)

    // 数値1と数値2を計算
    var divide_result = calc_origin1 / calc_origin2;

    // 表示
    console.log(divide_result);
    document.getElementById('result').innerHTML = divide_result;
});