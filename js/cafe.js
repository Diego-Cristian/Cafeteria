let numero 

/*--> Ingresar Nombre y Apellido OK
--> Ingresar monto del Prestamo (minimo de 10.000 y un máximo de 50.000) OK
--> Elegir cuotas a pagar (6, 12 o 18) OK
--> Calcular interes OK
    -- 6 cuotas = interes de 2,6--
    -- 12 cuotas = interes de 2,4--
    -- 18 cuotas = interes de 2,3--
    
-->Validar Nombre y Apellido, Monto a retirar y cuotas.
*/

//VALIDAR NOMBRE Y APELLIDO
function validarNombre(nombre){
    if( (nombre == " ") || (nombre.length < 3 )){
        return false;
}   else {
        return true;
    }
}
function ValidarApellido (apellido){
    if ( (apellido == " ") || (apellido.length <3 )){
        return false;
    }else {
        return true;
    }
}
function ValidarSegundoNombre (segundonombre){
    if ( (segundonombre == " ") || (segundonombre.length <3 )  ){
        return false;
    }else {
        return false;
    }
}
