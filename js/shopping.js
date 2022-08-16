document.getElementById("send").addEventListener("click", function () {
  //input value
  let amountField = document.getElementById("amount");
  let amount = parseFloat(amountField.value);

  //purchase amount
  let prevCostElement = document.getElementById("purchase-cost");
  let prevCost = prevCostElement.innerText;
  prevCost = parseFloat(prevCost);

  //discount
  let discountElement = document.getElementById("discount");
  let discount = discountElement.innerText;
  discount = parseFloat(discount);

  //total
  let totalCostElement = document.getElementById("total-cost");
  let totalCost = totalCostElement.innerText;
  totalCost = parseFloat(totalCost);

  prevCostElement.innerText = amount;

  if (isNaN(amount) || amount == 0) {
    prevCostElement.innerText = "00";
    return alert("Please provide us a vaild price");
  } else if (amount >= 50000) {
    discountElement.innerText = 50;
    let totalDiscount =
      (prevCostElement.innerText * discountElement.innerText) / 100;
    totalCostElement.innerText = amount - totalDiscount;
  } else if (amount >= 30000) {
    discountElement.innerText = 30;
    let totalDiscount =
      (prevCostElement.innerText * discountElement.innerText) / 100;
    totalCostElement.innerText = amount - totalDiscount;
  } else if (amount >= 5000) {
    discountElement.innerText = 10;
    let totalDiscount =
      (prevCostElement.innerText * discountElement.innerText) / 100;
    totalCostElement.innerText = amount - totalDiscount;
  } else if (amount > 0) {
    discountElement.innerText = 5;
    let totalDiscount =
      (prevCostElement.innerText * discountElement.innerText) / 100;
    totalCostElement.innerText = amount - totalDiscount;
  }
});
