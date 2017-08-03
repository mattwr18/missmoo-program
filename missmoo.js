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

              $("#peanut").click(function(){
                $("#questions").html("What were the total sales/expenses for this week?");
                $(".form-group").removeAttr("style");
                $(this).addClass("btn-danger");
                btnClicked = "Peanut";
              });

              $("#sunflower").click(function(){
                $("#questions").html("What were the total sales/expenses for this week?");
                $(".form-group").removeAttr("style");
                $(this).addClass("btn-danger");
                btnClicked = "Sunflower";
              });
              $("#yam").click(function(){
                $("#questions").html("What were the total sales/expenses for this week?");
                $(".form-group").removeAttr("style");
                $(this).addClass("btn-danger");
                btnClicked = "Yam";
              });
              $("#cashew").click(function(){
                $("#questions").html("What were the total sales/expenses for this week?");
                $(".form-group").removeAttr("style");
                $(this).addClass("btn-danger");
                btnClicked = "Cashew";
              });
              $("#coconut").click(function(){
                $("#questions").html("What were the total sales/expenses for this week?");
                $(".form-group").removeAttr("style");
                $(this).addClass("btn-danger");
                btnClicked = "Coconut";
              });
              $("#almond").click(function(){
                $("#questions").html("What were the total sales/expenses for this week?");
                $(".form-group").removeAttr("style");
                $(this).addClass("btn-danger");
                btnClicked = "Almond";
              });

              $("#submitBtn").click(function () {
                var submit = $("#number-input").val();
                  switch (btnClicked) {
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

                    default: alert("OH NO!!");
                  }
                });
                $(window).click(function revertBg(element) {
                  if (element.target.matches('button')) {
                      console.log(element);
                  }
                });
              });
