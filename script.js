function calculBMI() {
    var age = parseFloat(document.getElementById("age").value);
    var height = Number(document.getElementById("height").value);
    // height convertion
    height = height/100;
    var weight = Number(document.getElementById("weight").value);

    let bmi = weight/(height*height);
    // Verify that the user has the correct age to calculate their BMI
    const messageError = "You don't have the required age to calculate your BMI.";
    if (age >= 18 && age <= 65) {
        document.getElementById("bmitxt").value = bmi;
    } else {
        document.getElementById("bmitxt").value = messageError;
    };

    // Tell whether the user has a correct BMI or not.
    if (bmi > 18.5 && bmi < 24.9) {
        document.getElementById("bmitxt").style.color="green";
    } else if (bmi > 25 && bmi < 29.9) {
        document.getElementById("bmitxt").style.color="orange";
    } else {
        document.getElementById("bmitxt").style.color="red";
    };
};