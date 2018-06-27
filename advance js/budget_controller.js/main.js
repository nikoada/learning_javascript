var switchBtnObj = document.getElementById("switchBtn");
switchBtnObj.style.color = "green";

switchBtnObj.addEventListener("click", function() {
  if (switchBtnObj.innerHTML == "+") {
    switchBtnObj.innerHTML = "-";
    switchBtnObj.style.color = "red";
  } else {
    switchBtnObj.innerHTML = "+";
    switchBtnObj.style.color = "green";
  }
});

console.log("hello")


var budgetController = (function() {

  var income = 0;

  return {
    addIncome : function(value) {
      if (Number(value)) {
        income += Number(value);
      } else {
        alert("Please enter a number value without comma.");
      }
    },
    actualIncome : function() { return income; }
  }

})();


var UIController = (function() {
  var incomeDisObj = document.getElementById("income");
  var inputDes = document.getElementById("inputDes");
  var inputVal = document.getElementById("inputVal");

  // var DOMStrings = {
  //   inputType = "add__type";
  // }
  //
  // return {
  //   getInput : function() {},
  //   addListItem : function() {};
  // }
  return {
    getInput : function() { return inputVal.value; },
    updateUI : function(value) { incomeDisObj.innerHTML =  value; },
    clearField : function() { inputVal.value = ""; }
  }

})();


var controller = (function(budgetCtrl, UICtrl) {

  var setupEventListerner = function() {
    var submitBtnObj = document.getElementById("submitBtn")
    submitBtnObj.addEventListener("click", function() {
      budgetController.addIncome(UIController.getInput());
      UIController.updateUI("+ " + budgetController.actualIncome());
      UIController.clearField();
    });
  };

  var updateBudget = function() {};

  return {
    init : function() {
      setupEventListerner();
      //UICtrl.displayBudget();
    }
  }

}) (budgetController, UIController);

controller.init();
