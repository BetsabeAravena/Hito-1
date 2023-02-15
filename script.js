
const $answerOne = document.getElementById("answer1"),
  $inputOne = document.getElementById("one");
  $inputtwo = document.getElementById("two");
  $inputThree = document.getElementById("three");

 $answerOne.addEventListerner("click", function onclick(event) {   
  if ($inputThree.checked) {   
  alert("Marcaste 6 patas, respesta Incorrecta!!");
  } else if($inputTwo.checked) {   
  alert("Marcaste 12 patas, respuesta Incorrecta!!");
  } else if ($inputOne.checked) {   
  alert("Marcaste 8 patas,respuesta Correcta!!");
    }   else {   
  alert("por favor, selecciona una respuesta");
    }
 });

  const $answerTwo=document.getElemtById("answer2"),
  $inputFour= document.getElementById("four"),
  $inputFive= document.getElementById("five"),
  $inputsix= document.getElementById("six"),

  $answerTwo.addEventListerner("click", function onclick(event) {   
  if ($inputfive.checked){   
  alert("Marcaste Colibri, respesta Correcta!!");
    } else if($inputfour.checked){  
  alert("Marcaste Golondrina, respuesta Incorrecta!!");
   } else if ($inputsix.checked){   
  alert("Marcaste loro,respuesta Incorrecta!!");
  } else {   
  alert("por favor, selecciona una respuesta");
    }
   });
