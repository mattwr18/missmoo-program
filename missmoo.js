$(document).ready(function () {
  var storage = JSON.parse(localStorage.missmoo);
  var findPeanut = storage.find(function(key) {
    return key.name === "Peanut"});
    var findSunflower = storage.find(function(key) {
      return key.name === "Sunflower"});
      var findYam = storage.find(function(key) {
        return key.name === "Yam"});
        var findCashew = storage.find(function(key) {
          return key.name === "Cashew"});
          var findCoconut = storage.find(function(key) {
            return key.name === "Coconut"});
            var findAlmond = storage.find(function(key) {
              return key.name === "Almond"});
              var findSmoothies = storage.find(function(key) {
                return key.name === "Smoothies"});
                var findBottles = storage.find(function(key) {
                  return key.name === "Bottles"});
                  var findDessert = storage.find(function(key){
                    return key.name === "Dessert"});

              var $btnClicked = "";
              var questionProfit = "What were the total sales/expenses for this week";
              var questionStock = "How much product did you use/purchase this week?";
              $("#peanut").html(findPeanut.name + ":<br>" + findPeanut.profit);
              $("#sunflower").html(findSunflower.name + ":<br>" + findSunflower.profit);
              $("#yam").html(findYam.name + ":<br>" + findYam.profit);
              $("#cashew").html(findCashew.name + ":<br>" + findCashew.profit);
              $("#coconut").html(findCoconut.name + ":<br>" + findCoconut.profit);
              $("#almond").html(findAlmond.name + ":<br>" + findAlmond.profit);
              $("#smoothies").html(findSmoothies.name + ":<br>" + findSmoothies.profit);
              $("#dessert").html(findDessert.name + ":<br>" + findDessert.profit);

              $("#peanutStock").html(findPeanut.name + ":<br>" + findPeanut.stock);
              $("#sunflowerStock").html(findSunflower.name + ":<br>" + findSunflower.stock);
              $("#yamStock").html(findYam.name + ":<br>" + findYam.stock);
              $("#cashewStock").html(findCashew.name + ":<br>" + findCashew.stock);
              $("#coconutStock").html(findCoconut.name + ":<br>" + findCoconut.stock);
              $("#almondStock").html(findAlmond.name + ":<br>" + findAlmond.stock);
              $("#bottleStock").html(findBottles.name + ":<br>" + findBottles.stock);

              $("#peanut").click(function (){
                afterBtnClick(this, questionProfit);
                $btnClicked = "Peanut";
              });
              $("#sunflower").click(function(){
                afterBtnClick(this, questionProfit);
                $btnClicked = "Sunflower";
              });
              $("#yam").click(function(){
                afterBtnClick(this, questionProfit);
                $btnClicked = "Yam";
              });
              $("#cashew").click(function(){
                afterBtnClick(this, questionProfit);
                $btnClicked = "Cashew";
              });
              $("#coconut").click(function(){
                afterBtnClick(this, questionProfit);
                $btnClicked = "Coconut";
              });
              $("#almond").click(function(){
                afterBtnClick(this, questionProfit);
                $btnClicked = "Almond";
              });
              $("#smoothies").click(function(){
                afterBtnClick(this, questionProfit);
                $btnClicked = "Smoothies";
              });
              $("#dessert").click(function(){
                afterBtnClick(this, questionProfit);
                $btnClicked = "Dessert";
              });

              $("#peanutStock").click(function(){
                afterBtnClick(this, questionStock);
                $btnClicked = "peanutStock";
              });
              $("#sunflowerStock").click(function(){
                afterBtnClick(this, questionStock);
                $btnClicked = "sunflowerStock";
              });
              $("#yamStock").click(function(){
                afterBtnClick(this, questionStock);
                $btnClicked = "yamStock";
              });
              $("#cashewStock").click(function(){
                afterBtnClick(this, questionStock);
                $btnClicked = "cashewStock";
              });
              $("#coconutStock").click(function(){
                afterBtnClick(this, questionStock);
                $btnClicked = "coconutStock";
              });
              $("#almondStock").click(function(){
                afterBtnClick(this, questionStock);
                $btnClicked = "almondStock";
              });
              $("#bottleStock").click(function(){
                afterBtnClick(this, questionStock);
                $btnClicked = "bottleStock";
              });
              sumProfit();
              $("#submitBtn").click(function () {
                var submit = $("#number-input").val();
                    $("#number-input").val(0);
                    switch ($btnClicked) {
                    case "Peanut":
                    findPeanut.profit += Number(submit);
                    $("#peanut").html(findPeanut.name + ":<br>" + findPeanut.profit);
                    $("#peanut").removeClass("btn-danger");

                    break;
                    case "Sunflower":
                    findSunflower.profit += Number(submit);
                    $("#sunflower").html(findSunflower.name + ":<br>" + findSunflower.profit);
                    $("#sunflower").removeClass("btn-danger");

                    break;
                    case "Yam":
                    findYam.profit += Number(submit);
                    $("#yam").html(findYam.name + ":<br>" + findYam.profit);
                    $("#yam").removeClass("btn-danger");

                    break;
                    case "Cashew":
                    findCashew.profit += Number(submit);
                    $("#cashew").html(findCashew.name + ":<br>" + findCashew.profit);
                    $("#cashew").removeClass("btn-danger");

                    break;
                    case "Coconut":
                    findCoconut.profit += Number(submit);
                    $("#coconut").html(findCoconut.name + ":<br>" + findCoconut.profit);
                    $("#coconut").removeClass("btn-danger");

                    break;
                    case "Almond":
                    findAlmond.profit += Number(submit);
                    $("#almond").html(findAlmond.name + ":<br>" + findAlmond.profit);
                    $("#almond").removeClass("btn-danger");

                    break;
                    case "Smoothies":
                    findSmoothies.profit += Number(submit);
                    $("#smoothies").html(findSmoothies.name + ":<br>" + findSmoothies.profit);
                    $("#smoothies").removeClass("btn-danger");

                    break;
                    case "Dessert":
                    findDessert.profit += Number(submit);
                    $("#dessert").html(findDessert.name + ":<br>" + findDessert.profit);
                    $("#dessert").removeClass("btn-danger");

                    break;
                    case "peanutStock":
                    findPeanut.stock += Number(submit);
                    $("#peanutStock").html(findPeanut.name + ":<br>" + findPeanut.stock);
                    $("#peanutStock").removeClass("btn-danger");

                    break;
                    case "sunflowerStock":
                    findSunflower.stock += Number(submit);
                    $("#sunflowerStock").html(findSunflower.name + ":<br>" + findSunflower.stock);
                    $("#sunflowerStock").removeClass("btn-danger");

                    break;
                    case "yamStock":
                    findYam.stock += Number(submit);
                    $("#yamStock").html(findYam.name + ":<br>" + findYam.stock);
                    $("#yamStock").removeClass("btn-danger");

                    break;
                    case "cashewStock":
                    findCashew.stock += Number(submit);
                    $("#cashewStock").html(findCashew.name + ":<br>" + findCashew.stock);
                    $("#cashewStock").removeClass("btn-danger");

                    break;
                    case "coconutStock":
                    findCoconut.stock += Number(submit);
                    $("#coconutStock").html(findCoconut.name + ":<br>" + findCoconut.stock);
                    $("#coconutStock").removeClass("btn-danger");

                    break;
                    case "almondStock":
                    findAlmond.stock += Number(submit);
                    $("#almondStock").html(findAlmond.name + ":<br>" + findAlmond.stock);
                    $("#almondStock").removeClass("btn-danger");

                    break;
                    case "bottleStock":
                    findBottles.stock += Number(submit);
                    $("#bottleStock").html(findBottles.name + ":<br>" + findBottles.stock);
                    $("#bottleStock").removeClass("btn-danger");

                    break;

                    default: alert("OH NO!!");
                  }


//Save data to localStorage
                  var productsArray = [];
                  productsArray.push(findPeanut);
                  productsArray.push(findSunflower);
                  productsArray.push(findYam);
                  productsArray.push(findCashew);
                  productsArray.push(findCoconut);
                  productsArray.push(findAlmond);
                  productsArray.push(findSmoothies);
                  productsArray.push(findBottles);
                  productsArray.push(findDessert);

                  localStorage.setItem("missmoo", JSON.stringify(productsArray));

                });
//Code common to all btn clicks
                function afterBtnClick(btn, quest) {
                  $("#questions").html(quest);
                  $(".form-group").removeAttr("style");
                  $(btn).addClass("btn-danger");

                }
                function sumProfit() {
                  var profit = findPeanut.profit + findSunflower.profit + findYam.profit + findCashew.profit + findCoconut.profit + findAlmond.profit + findDessert.profit
                  $("#profit").html("Profit" + ":<br>" + profit);
                }
              });
