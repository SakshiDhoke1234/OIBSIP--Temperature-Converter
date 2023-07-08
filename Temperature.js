var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var input = document.getElementById("value");
var r = document.getElementById("result");
var result;
function converter() {
    if (option1.value == 'Celcius' && option2.value == 'Fahrenheit') {

        result = (parseFloat(input.value) * 9) / 5 + 32;
        r.value = parseFloat(result.toFixed(2));
    }
    else if (option1.value == 'Celcius' && option2.value == 'Kelvin') {

        result = (parseFloat(input.value) + 273.15);
        r.value = parseFloat(result.toFixed(2));
    }
    else if (option1.value == 'Fahrenheit' && option2.value == 'Celcius') {

        result = ((parseFloat(input.value) - 32) * 5) / 9;
        r.value = parseFloat(result.toFixed(2));
    }
    else if (option1.value == 'Fahrenheit' && option2.value == 'Kelvin') {

        result = (parseFloat(input.value) - 32) * 5 / 9 + 273.15;
        r.value = parseFloat(result.toFixed(2));
    }
    else if (option1.value == 'Kelvin' && option2.value == 'Celcius') {

        result = (parseFloat(input.value) - 273.15);
        r.value = parseFloat(result.toFixed(2));
    }
    else if (option1.value == 'Kelvin' && option2.value == 'Fahrenheit') {

        result = (parseFloat(input.value) - 273.15) * 9 / 5 + 32;
        r.value = parseFloat(result.toFixed(2));
    }
    else {

        document.getElementById("result").innerHTML = "undefined";
    }

    if (input.value == "") {
        alert(`No input \nNo Output`);
    }

    document.getElementById("result").innerHTML = r.value;

}
document.getElementById('clear').addEventListener
    ('click', function (e) {
        document.getElementById("value").value = "";
        document.getElementById("result").innerHTML = "";

    })
