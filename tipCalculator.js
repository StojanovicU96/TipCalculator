var resetBtn =  $("button");
var percentBtn = $(".percent-btn");
var billError = $("#bill-error");
var numOfPeopleError = $("#num-of-people-error");
var billInput = $("#bill-input");
var numOfPeopleInput = $("#num-of-people-input");

percentBtn.on("click", function(){
    var check = 0;

    $(".percent-btn").removeClass("selected-percent");

    proba($(this).find(".amount").text());

    if( billInput.val() === ""){
        billError.css("display", "block");
    }else{
        billError.css("display", "none");
        resetBtn.css("opacity", "1");
        check++;
    }

    if( numOfPeopleInput.val() === ""){
        numOfPeopleError.css("display", "block");
    }else{
        numOfPeopleError.css("display", "none");
        resetBtn.css("opacity", "1");
        check++;
    }

    if( check === 2){
        $(this).toggleClass("selected-percent");
        check = 0;
    }
});

$("#custom-tip").keypress(function(event) {
   if(event.which === 13){
       console.log($(this).val());
       proba($(this).val());
   } 
});

function proba(percent) {
    var percentAmount = percent;
    var tipAmount = 0;
    var total = 0;

    var bill = billInput.val();
    var numOfPeople = numOfPeopleInput.val();

    if( bill > 0 && percentAmount>0 && numOfPeople>0){
        tipAmount = (((bill / 100) * percentAmount) / numOfPeople);
        $("#tip-amount").text("$"+tipAmount.toFixed(2));
        
        total = ((bill / numOfPeople) + tipAmount);
        $("#total").text("$"+total.toFixed(2));
    }
}

resetBtn.on("click", function() {

    $(".percent-btn").removeClass("selected-percent");
    $("input").val("");
    billError.css("display", "none");
    numOfPeopleError.css("display", "none");
    $(this).prop("disabled", true);
    $(this).css("opacity", "0.3");
});

$("input").keypress(function(){
    resetBtn.css("opacity", "1");
    resetBtn.prop("disabled", false);
});
