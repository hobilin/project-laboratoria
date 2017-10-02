function calculateBillTotal(preTaxAndTipAmount) {
    var taxPercent = 9.5;
    var tipPercent = 15;
  var tax = (preTaxAndTipAmount*taxPercent)/100;
  var tipAmount = (preTaxAndTipAmount*tipPercent)/100;
  return preTaxAndTipAmount+tax+tipAmount;
}
