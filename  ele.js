
function electricityBill(units) {
  let bill = 0;

  if (units <= 50) { //first 50 units
    bill = units * 0.5;

  } else if (units <= 150) { //for next 100 units
    bill = (50 * 0.5) + ((units - 50) * 0.75);

  } else if (units <=250){ //for next 100 units
    bill = (50 * 0.5) + (100 * 0.75) + ((units - 150) * 1.20);

  } else{ //for the rest units
    bill = (50*0.5) + (100*0.75) + (100*1.20) + ((units - 250)* 1.5);
  }

  let surge = bill * 0.20; //20%
  return finalbill = bill + surge;
}


console.log(electricityBill(4));