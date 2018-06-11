
    // get the user inputs


    var value1 = parseFloat(prompt('enter first value'));

    var choice = prompt('Choose your action add(+) subtract(-) multiply(*) divide(/)');

    var value2 = parseFloat(prompt('enter the second value'));

    if (choice === "+") {
    result = value1 + value2;
  } else if (choice === "-") {
    result = value1 - value2;
  } else if (choice === "*"){
    result = value1 * value2;
  } else if (choice=== "/"){
    result = value1 / value2;
  } else {
    result = value1 + value2;
  }

//
  // var time = parseFloat(prompt("Time?"));
  //   if (time < 10) {
  //   greeting = "Good morning";
  // } else if (time < 20) {
  //   greeting = "Good day";
  // } else {
  //   greeting = "Good evening";
  // }
  // alert(greeting);

      

console.log(value1,choice,value2);
console.log(result);

    alert("Your Result is " + result);

    // var contin= prompt("Do you want to continue?");

//doing a force reload to never stop the calculator
    forceGet=true;
    location.reload(forceGet);
