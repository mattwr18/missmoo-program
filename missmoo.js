/*  $("#questions").html("Which vegmilk would you like to add?");

}

function updateMilks() {
  $("#questions").html("Which vegmilk would you like to update?");
  $("#addBtn").html("Peanut");
  $("#updateBtn").html("Sunflower");
  $("#deleteBtn").html("Yam");
  $("#cashewBtn").html("Cashew").addClass("btn btn-info text-center").css({"margin-right": "50px"});
  $("#coconutBtn").html("Coconut").addClass("btn btn-secondary text-center").css({"margin-right": "50px"});
  $("#almondBtn").html("Almond").addClass("btn btn-primary text-center").css({"margin-right": "50px"});
}
function deleteMilk() {
  $("#questions").html("Which vegmilk would you like to delete?");

}
function updateCashew() {
  $("#questions").html("Would you like to update stock or profit?");
  $("#addBtn").replaceWith("<button>Stock</button>").addClass("btn btn-info text-center").css({"margin-right": "50px"});
  $("#updateBtn").html("Profit");
  $("#deleteBtn, #cashewBtn, #coconutBtn, #almondBtn").detach();
}*/
$(document).ready(function () {
/*  Storage.prototype.setObject = function(key, value) {
      this.setItem(key, JSON.stringify(value));
  }

  Storage.prototype.getObject = function(key) {
      return JSON.parse(this.getItem(key));
  }

  var peanut = localStorage.getObject("matt")[0].name;
  var profit = localStorage.getObject("matt")[0].profit;
//  alert(peanut, profit);
   $("#peanut").html(peanut + "<br>" + profit);
   Storage.prototype.setObject(profit, 2);
*/
   function update() {
     alert(peanut);
  }
  $("#peanut").click(function(){
    $("#questions").html("What were the total sales/expenses for this week?");
    $(".form-group").removeAttr('style');  

  });

});
