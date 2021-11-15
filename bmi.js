
function bmical()
{
	var height = document.bmireport.height.value
	var weight =document.bmireport.weight.value
	if(weight > 0 && height > 0){	
    var finalBmi = weight/(height*height)
    document.bmireport.bmi.value = finalBmi
    if(finalBmi < 18.5){
    document.bmireport.meaning.value = "That you are too thin."
    }
    if(finalBmi > 18.5 && finalBmi < 25){
    document.bmireport.meaning.value = "That you are healthy."
    }
    if(finalBmi > 25){
    document.bmireport.meaning.value = "That you have overweight."
    }
    }
    else{
    alert("Please Fill in everything correctly")
    }
    }

	
