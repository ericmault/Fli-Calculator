var recenteringSpeed = 0.05;//5% need to change to non global


function myFunction() {
                
    var minLR = 1.7
    var maxLR = 2.3
    var targetLR = 2
    var ethPrice = document.getElementById("ethPrice");
    var months = document.getElementById("months");
    var percentChange = document.getElementById("percentChange");
    var initialInvestment = document.getElementById("initialInvestment");

    var currentLeverageRatio = document.getElementById("currentLeverageRatio");
    // var fliFinalPrice = document.getElementById("");
    // var currentLeverageRatio = 1.8

        // var rs = document.getElementById(debugRecenterSpeed);
        // if(rs.style.display === "none"){
        //     rs.style.display = "block";
        //     document.getElementById("currentRecenterSpeed").innerHTML = recenteringSpeed;
        // }else{
        //     rs.style.display = "none";
        //     var recenteringSpeed = 0.05;//5%
        // }
    
    // var recenteringSpeed = document.getElementById("recenteringSpeed");
  

    // document.getElementById("fliEarned").innerHTML = (initialInvestment.value * (1+((ethPrice.value * (percentChange.value/months.value)/ethPrice.value-1)*1.8))).toFixed(2);
    document.getElementById("fliEarned").innerHTML = (initialInvestment.value * (1+(percentChange.value/100)*(currentLeverageRatio.value))).toFixed(2);
    // document.getElementById("ethEarned").innerHTML = (ethPrice.value * (percentChange.value/months.value));
    document.getElementById("ethEarned").innerHTML = initialInvestment.value* (1+(percentChange.value/100)).toFixed(2);
    document.getElementById("newLeverageRatio").innerHTML = Math.max(minLR,Math.min(maxLR,targetLR*(1-recenteringSpeed) +currentLeverageRatio.value*recenteringSpeed)).toFixed(2);
    document.getElementById("debugCurrentLeverageRatioValue").innerHTML = currentLeverageRatio.value;
    // document.getElementById("fliFinalPrice").innerHTML = fliFinalPrice.value;
    document.getElementById("ethFinalPrice").innerHTML = ethPrice.value * (1+(percentChange.value/100));
    // ethPrice.value* (1+(percentChange.value/100));
    
}


function debug() {

    // var debugRecenterSpeed = document.getElementById("debugRecenterSpeed");
    // if (debugRecenterSpeed.style.display === "none") {
    //   debugRecenterSpeed.style.display = "block";
    //   document.getElementById("currentRecenterSpeed").innerHTML = recenteringSpeed;
    // } else {
    //   debugRecenterSpeed.style.display = "none";
    // }

    var debugNewLeverageRatio = document.getElementById("debugNewLeverageRatio");
    if (debugNewLeverageRatio.style.display === "none") {
        debugNewLeverageRatio.style.display = "block";
    } else {
        debugNewLeverageRatio.style.display = "none";
    }


    var debugCurrentRecenterSpeed = document.getElementById("debugCurrentRecenterSpeed");
    if (debugCurrentRecenterSpeed.style.display === "none") {
        debugCurrentRecenterSpeed.style.display = "block";
    } else {
        debugCurrentRecenterSpeed.style.display = "none";
    }

    
    var debugCurrentLeverageRatio = document.getElementById("debugCurrentLeverageRatio");
    if (debugCurrentLeverageRatio.style.display === "none") {
        debugCurrentLeverageRatio.style.display = "block";
        document.getElementById("currentRecenterSpeed").innerHTML = recenteringSpeed;
    } else {
        debugCurrentLeverageRatio.style.display = "none";
    }


    
  }
