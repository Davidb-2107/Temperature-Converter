//Select elements 
const celsiusInput = document.querySelector("#celsius");
const fahrenheitInput = document.querySelector("#fahrenheit");
const kelvinInput = document.querySelector("#kelvin");
const inputs = document.getElementsByClassName("input"); //GET the three input fields



//LOOP to update values
for(let i=0;i<inputs.length;i++){
    let input = inputs[i];

    input.addEventListener("input", function (e) {
        let value = parseFloat(e.target.value);

    switch (e.target.name) { //check wich element field is being "updated"

        //if is celsius input field
        case"celsius": 
        fahrenheitInput.value=(value*1.8)+32 //convert celsius to fahrenheit
        kelvinInput.value=value+273.15; //convert celsius to kelvin
        break;

        //if is fahrenheit input field
        case"fahrenheit":
        celsiusInput.value=(value-32)/1.8; //convert fahrenheit to celsius
        kelvinInput.value=((value-32)/1.8)+273.15; //convert fahrenheit to kelvin
        break;

        //if is kelvin input field
        case "kelvin":
            celsiusInput.value = value - 273.15; //convert kelvin to celsius 
            fahrenheitInput.value = ((value - 273.15) * 1.8) + 32; //convert kelvin to fahrenheit 
    }
});
};
