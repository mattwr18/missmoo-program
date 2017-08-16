$(document).ready(function () {
  var storage = JSON.parse(localStorage.matt);
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
              var $btnClicked = "";
              var questionProfit = "What were the total sales/expenses for this week";
              var questionStock = "How much product did you use/purchase this week?";
              $("#peanut").html(findPeanut.name + ":<br>" + findPeanut.profit);
              $("#sunflower").html(findSunflower.name + ":<br>" + findSunflower.profit);
              $("#yam").html(findYam.name + ":<br>" + findYam.profit);
              $("#cashew").html(findCashew.name + ":<br>" + findCashew.profit);
              $("#coconut").html(findCoconut.name + ":<br>" + findCoconut.profit);
              $("#almond").html(findAlmond.name + ":<br>" + findAlmond.profit);

              $("#peanutStock").html(findPeanut.name + ":<br>" + findPeanut.stock);
              $("#sunflowerStock").html(findSunflower.name + ":<br>" + findSunflower.stock);
              $("#yamStock").html(findYam.name + ":<br>" + findYam.stock);
              $("#cashewStock").html(findCashew.name + ":<br>" + findCashew.stock);
              $("#coconutStock").html(findCoconut.name + ":<br>" + findCoconut.stock);
              $("#almondStock").html(findAlmond.name + ":<br>" + findAlmond.stock);

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
              $("#peanutStock").click(function(){
                afterBtnClick(this, questionStock);
                $btnClicked = "PeanutStock";
              });
              $("#sunflowerStock").click(function(){
                afterBtnClick(this, questionStock);
                $btnClicked = "SunflowerStock";
              });
              $("#yamStock").click(function(){
                afterBtnClick(this, questionStock);
                $btnClicked = "YamStock";
              });
              $("#cashewStock").click(function(){
                afterBtnClick(this, questionStock);
                $btnClicked = "CashewStock";
              });
              $("#coconutStock").click(function(){
                afterBtnClick(this, questionStock);
                $btnClicked = "CoconutStock";
              });
              $("#almondStock").click(function(){
                afterBtnClick(this, questionStock);
                $btnClicked = "AlmondStock";
              });

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
                    case "PeanutStock":
                    findPeanut.stock += Number(submit);
                    $("#peanutStock").html(findPeanut.name + ":<br>" + findPeanut.stock);
                    $("#peanutStock").removeClass("btn-danger");

                    break;
                    case "SunflowerStock":
                    findSunflower.stock += Number(submit);
                    $("#sunflowerStock").html(findSunflower.name + ":<br>" + findSunflower.stock);
                    $("#sunflowerStock").removeClass("btn-danger");

                    break;
                    case "YamStock":
                    findYam.stock += Number(submit);
                    $("#yamStock").html(findYam.name + ":<br>" + findYam.stock);
                    $("#yamStock").removeClass("btn-danger");

                    break;
                    case "CashewStock":
                    findCashew.stock += Number(submit);
                    $("#cashewStock").html(findCashew.name + ":<br>" + findCashew.stock);
                    $("#cashewStock").removeClass("btn-danger");

                    break;
                    case "CoconutStock":
                    findCoconut.stock += Number(submit);
                    $("#coconutStock").html(findCoconut.name + ":<br>" + findCoconut.stock);
                    $("#coconutStock").removeClass("btn-danger");

                    break;
                    case "AlmondStock":
                    findAlmond.stock += Number(submit);
                    $("#almondStock").html(findAlmond.name + ":<br>" + findAlmond.stock);
                    $("#almondStock").removeClass("btn-danger");

                    break;

                    default: alert("OH NO!!");
                  }
//Save data to localStorage
                  var productsArray = [];
                  productsArray.push(findPeanut)
                  productsArray.push(findYam)
                  productsArray.push(findAlmond)
                  productsArray.push(findCoconut)
                  productsArray.push(findSunflower)
                  productsArray.push(findCashew);
                  localStorage.setItem("matt", JSON.stringify(productsArray));
                });
//Code common to all btn clicks
                function afterBtnClick(btn, quest) {
                  $("#questions").html(quest);
                  $(".form-group").removeAttr("style");
                  $(btn).addClass("btn-danger");

                }
              });
