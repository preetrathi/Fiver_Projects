// Calculate
function getSelectedInput(){
    var symbol = document.getElementById('symbol').value;
    document.getElementById('symbol_gbp').innerHTML = symbol;
    document.getElementById('symbol_future').innerHTML = symbol;
    // document.getElementById('symbol_total').innerHTML = symbol;
    document.getElementById('symbol_total_future').innerHTML = symbol;

    if (symbol == '£'){
        document.getElementById('convert').innerHTML = "GBP to USD";
    }else if(symbol == '€'){
        document.getElementById('convert').innerHTML = "Euro to USD";
    }else if(symbol == '$'){
        document.getElementById('convert').innerHTML = "Australian Dollars to USD";
    }else if(symbol == '¥'){
        document.getElementById('convert').innerHTML = "Japen Yen to USD";
    }else {
        document.getElementById('convert').innerHTML = "Select Correct Input";
    }
};

function submit(){
    var britian_pound = document.getElementById('britian_pound').value;
    var gpd_to_usd = document.getElementById('gpb_usd').value;
    var new_rate = document.getElementById('new_rate').value;
    result = britian_pound * gpd_to_usd
    britian_pound = parseFloat(britian_pound)

    document.getElementById('result').value = result.toFixed(2);
    document.getElementById('future_britian_pound').value =  britian_pound.toFixed(2);
    document.getElementById('britian_pound').value =  britian_pound.toFixed(2);
    document.getElementById('future_result').value = result.toFixed(2);

    // total
    var total = result * new_rate;
    total = parseFloat(total);
    var difference = britian_pound - total;
    var _100_invoice = difference * 100
    var neg_difference = total - britian_pound;
    var neg_difference_100 = neg_difference * 100;

    document.getElementById('total').value = total.toFixed(2);
    document.getElementById('difference').value = neg_difference.toFixed(2);
    document.getElementById('invoice_100').value = neg_difference_100.toFixed(2);
    document.getElementById('future_total').value = britian_pound.toFixed(2);
    document.getElementById('future_invoice').value = _100_invoice.toFixed(2);
    document.getElementById('invoice_same').value = _100_invoice.toFixed(2);


    // css border styling

    document.getElementById("b-2").style.border = '2px solid green';
    document.getElementById("b-3").style.border = '2px solid green';
    document.getElementById("b-4").style.border = '2px solid green';
    document.getElementById("b-5").style.border = '2px solid yellow';
    document.getElementById("b-6").style.border = '2px solid yellow';
    document.getElementById("b-7").style.border = '2px solid yellow';

    // document.getElementById("future_invoice").style.border = '2px solid yellow';
    

}

$(".autoCalc").on('input',function(){
    var x = document.getElementById('britian_pound').value;
    var y = document.getElementById('gpb_usd').value;

    if(Number.isNaN(x))
    x = 0;
    else if(Number.isNaN(y))
    y = 0;
    document.getElementById('result').value = (x * y).toFixed(2);

});

