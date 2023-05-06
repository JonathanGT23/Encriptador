
function reload (){

    location.reload()
}


function encriptar (){





    var area_texto = document.getElementById("area-texto").value;

    var cambio = area_texto.replace(/e/gm, "enter"); //convierte la e en (enter)
    var cambio = cambio.replace(/i/gm, "imes");      //convierte la i en (imes)
    var cambio = cambio.replace(/a/gm, "ai");        //convierte la a en (ai)
    var cambio = cambio.replace(/o/gm, "ober");      //convierte la o en (ober)
    var cambio = cambio.replace(/u/gm, "ufat");      //convierte la u en (ufat)

    if (area_texto == ""){


        Swal.fire({

            icon: "warning",
            title: "Alerta.",
            text: "Debe ingresar el texto que desea encriptar.",

        })
       
        document.getElementById("muneco").style.display= "block"

        document.getElementById("texto1").style.display= "block"
        document.getElementById("texto2").style.display= "block"
    
        document.getElementById("area-resultado").style.display= "none"
    
        document.getElementById("btn-copiar").style.display= "none"


    }


else{


document.getElementById("area-resultado").innerHTML = cambio;

    document.getElementById("area-texto").value = "";

    document.getElementById("muneco").style.display= "none"

    document.getElementById("texto1").style.display= "none"
    document.getElementById("texto2").style.display= "none"

    document.getElementById("area-resultado").style.display= "block"

    document.getElementById("btn-copiar").style.display= "block"

}


    

}

function decifrar (){

    var area_texto = document.getElementById("area-texto").value;
    
    var cambio = area_texto.replace(/enter/gm, "e");         //convierte la (enter) en "e"
    var cambio = cambio.replace(/imes/gm, "i");              //convierte la (imes) en (i)
    var cambio = cambio.replace(/ai/gm, "a");                //convierte la (ai) en (a)
    var cambio = cambio.replace(/ober/gm, "o");              //convierte la (ober) en (o)
    var cambio = cambio.replace(/ufat/gm, "u");              //convierte la (ufat) en (u)



    if (area_texto == ""){


        Swal.fire({

            icon: "warning",
            title: "Alerta.",
            text: "Debe ingresar el texto que desea desencriptar.",


        })

        document.getElementById("muneco").style.display= "block"

        document.getElementById("texto1").style.display= "block"
        document.getElementById("texto2").style.display= "block"
    
        document.getElementById("area-resultado").style.display= "none"
    
        document.getElementById("btn-copiar").style.display= "none"

      

    }

else{


document.getElementById("area-resultado").innerHTML = cambio;


    document.getElementById("area-texto").value = "";

    document.getElementById("muneco").style.display= "none"

    document.getElementById("texto1").style.display= "none"
    document.getElementById("texto2").style.display= "none"

    document.getElementById("area-resultado").style.display= "block"

    document.getElementById("btn-copiar").style.display= "block"


}
    



}



function copiar_txt(){

var area_texto = document.getElementById("area-texto").value;
var area =document.querySelector(".area");
var texto = document.getElementById("area-resultado");

var mensaje = document.getElementById("mensaje-copiar")


texto.select();
document.execCommand("copy");
area.classList.add("active");


document.getElementById("area-texto").value = "";


document.getElementById("muneco").style.display= "block"

document.getElementById("texto1").style.display= "block"
document.getElementById("texto2").style.display= "block"

document.getElementById("area-resultado").style.display= "none"

document.getElementById("btn-copiar").style.display= "none"



    Swal.fire({

        icon: "success",
        title: "Texto Copiado.",
        


    })








}










function copiar_txt(){

var area_texto = document.getElementById("area-texto").value;
var area =document.querySelector(".area");
var texto = document.getElementById("area-resultado");

var mensaje = document.getElementById("mensaje-copiar")


texto.select();
document.execCommand("copy");
area.classList.add("active");


document.getElementById("area-texto").value = "";


document.getElementById("muneco").style.display= "block"

document.getElementById("texto1").style.display= "block"
document.getElementById("texto2").style.display= "block"

document.getElementById("area-resultado").style.display= "none"

document.getElementById("btn-copiar").style.display= "none"



    Swal.fire({

        icon: "success",
        title: "Texto Copiado.",
        


    })








}
