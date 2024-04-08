function imc() {
    var age = parseFloat(document.getElementById("age").value);
    var taille = Number(document.getElementById("taille").value);
    // Convertir la taille en m
    var tailm = taille/100;
    var poids = Number(document.getElementById("poids").value);


    // Verifier que l'utilisateur à le bon âge pour calculer son IMC
    if (age >= 18 && age <= 65){
        var imcc = poids/(tailm*tailm);
        document.getElementById("imctxt").value = imcc;
    }else{
         alert("Vous n'avez pas l'âge requis pour calculer votre IMC")
     }

     
     // Dire si l'utilisateur à un IMC correcte ou non
    if (imcc > 18.5 && imcc < 24.9){
        document.getElementById("imctxt").style.color="green";
    }else if (imcc > 25 && imcc < 29.9){
        document.getElementById("imctxt").style.color="orange";
    }else{
        document.getElementById("imctxt").style.color="red";
    }
    }