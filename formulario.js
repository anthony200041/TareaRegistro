function formulario(){
    var nombre, apellidos, correo, clave, telefono ; /* Se declaran las variables*/
    nombre = document.getElementById("nombre").value;
    apellidos = document.getElementById("apellidos").value;   
    correo = document.getElementById("correo").value;
    clave = document.getElementById("clave").value;
    confclave = document.getElementById("confclave").value;
    telefono = document.getElementById("telefono").value;

    if(clave === confclave)/**Se hace una condicional en la que estrictamente la clave con la confirmacion de la clave deben
    coincidir, si este es el caso se continuara con las siguientes validaciones */
    {
    if(nombre !== "" || apellidos   !== ""||correo  !== ""  ||clave !== ""  ||confclave !== "" || telefono !== "" )
    {
        alert("Registrado con exito");  /**Se hacen las validaciones en las que todas las variable
    no queden en blanco si este es el caso saldrala alerta "Registrado con exito" */

    }
    }else
    alert("Las contraseñas no coinciden");  /**Caso contrario en que las contraseñas no coincidan nos va a alertar con el 
    mensaje "Las contraseñas no coinciden" */
    return false;
}