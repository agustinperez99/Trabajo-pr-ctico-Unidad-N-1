const tipoSeguroEl = document.getElementById("tipoSeguro");
const messageEl = document.getElementById("message");

tipoSeguroEl.addEventListener("change", handleChange);
function handleChange () {
    let price= ''
    switch (tipoSeguroEl.value) {
        case 'bas':
        price= "$500";
        break;
        case "int":
            price= "$1000";
            
            break;
            case "pre":
                price= "$1500";

                default:
                    break;


    }
    messageEl.innerText = 'El valor estimado es:'+ price;
}



/*var Basico;

var Basico= $500;

var Intermedio;
var Intermedio = $1000;


var Premium;
var Premium = $1500;

Set (Modifica el HTML para mostrar el valor en pantalla)*/
