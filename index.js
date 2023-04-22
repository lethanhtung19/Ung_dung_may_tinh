let number1 = document.getElementById("No1");
let number2 = document.getElementById("No2");

function add() {
  No1 = Number(number1.value);
  No2 = Number(number2.value);

  let show1 = No1 + No2;
  document.getElementById("result").innerHTML = ` ${No1} + ${No2} = ${show1}`;
}

function minus() {
  No1 = Number(number1.value);
  No2 = Number(number2.value);

  let show2 = No1 - No2;
  document.getElementById("result").innerHTML = ` ${No1} - ${No2} = ${show2}`;
}

function times() {
  No1 = Number(number1.value);
  No2 = Number(number2.value);

  let show3 = No1 * No2;
  document.getElementById("result").innerHTML = ` ${No1} x ${No2} = ${show3}`;
}

function devision() {
  No1 = Number(number1.value);
  No2 = Number(number2.value);

  let show4 = No1 / No2;
  document.getElementById("result").innerHTML = ` ${No1} : ${No2} = ${show4}`;
}
