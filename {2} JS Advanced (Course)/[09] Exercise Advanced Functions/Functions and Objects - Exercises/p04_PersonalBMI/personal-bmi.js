function patientCharts(name, age, weight, height) {
    let personalInfo = {
        age: age,
        weight: weight,
        height: height
    };

    let bmi = Math.round(weight / (height / 100) / (height / 100));
    
    let result = {
        name: name,
        personalInfo,
        BMI: bmi,
        status: status(bmi)
    };

    if(result.status === "obese") {
        result["recommendation"] = "admission required";
    }

    return result;

    function status(value) {
        if(value < 18.5) {
            return "underweight";
        } else if(value < 25) {
            return "normal";
        } else  if(value < 30) {
            return "overweight";
        } else if(value >= 30) {
            return "obese";
        }
    }
}