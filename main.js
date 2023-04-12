let nombre ="";
let contraseña = "";
let saldo = 0;
let monto = ""; 
let usuariook = undefined; 
let Maximo = 990;
let Minimo = 10;

function InicioDeSesion  () {

    let Acceso = document.querySelector("#Acceso")
    
    Acceso.innerHTML =


    `
    <div class = "container text-center">
        <h2 class= "Mingreso">Por favor ingresa tu usuario y Contraseña</h2>
    </div>    
    
    <div class = "container text-center">
        <div class="row">
            <div class="col">
                    <label for=""> Usuario:</label>
                    <input type="text" name="usuario" id="usuario">
            </div>
            <div class="col">
                    <label for=""> Contraseña:</label>
                    <input type="password" name="contraseña" id="contraseña">
            </div>
        </div>    
    </div>
    <br>
    <div class= "container text-center">

         <button class="btn btn-primary btn-lg" onClick="Cajero()" >Ingresar</button>
    
  
    </div>
    
    
    `
}

window.onload = InicioDeSesion;

let Usuarios = [
    {nombre: 'Mali', saldo: 200, contraseña: '123'},
    {nombre: 'Gera', saldo: 900, contraseña: '321'},
    {nombre: 'Angelica', saldo: 50, contraseña: '456'}

];

function Cajero(){

    nombre = document.getElementById("usuario").value
    
    contraseña = document.getElementById("contraseña").value
    let encontrado =false;

    for (let i =0; i < Usuarios.length; i++)
    {
        if (Usuarios[i].nombre === nombre && Usuarios[i].contraseña === contraseña)
        {
            saldo = Usuarios[i].saldo 
            usuariook = Usuarios[i].nombre
            
            
            encontrado = true;
            break;
        }
    }
    
    if (encontrado) {

        SesionIniciada()
    }else {
        alert ("El Usuario y/o la constraseña son ERRONEOS")
    }
        
    }

    function SesionIniciada(){

        let Dentro = document.querySelector ("#Acceso")

        Dentro.innerHTML =

        `
        
        <h1>Hola ${nombre} En que te podemos ayudar?</h1>
        <br>
        <div class= "paraboton">
    
        <button class ="btn btn-outline-secondary" onClick="ConsultarSaldo()">Consultar Saldo</button>
        <button class ="btn btn-outline-secondary" onClick="IngresandoMontos()">Ingresar Monto</button>
        <button class ="btn btn-outline-secondary" onClick="restandoMontos()">Retirar Monto</button>
        <button class ="btn btn-outline-secondary" onClick="InicioDeSesion()">Salir</button>
        </div>

        <br><br>
        
        
        `

        
    }
    


    function ConsultarSaldo() {

        let Saldos = document.querySelector ("#Tarjeta")

        Saldos.innerHTML =

        `
        
        <h1>Hola ${nombre} </h1>
        
         <h2 > Tu Saldo Es:  $ ${saldo}</h2>
        
        
        
        
        `

        
    }


    function IngresandoMontos(){


        let Paraingresar = document.querySelector ("#Tarjeta")
        Paraingresar.innerHTML =
        `
        <label for=""> Monto a ingresar:</label>
        <br>
        <input type="text" name="Saldos" id="Saldos">
        <div class = "container text-center">
            
             <button onClick="IngresarMonto()">Ingresar Monto</button>
        </div>
        
        `


    }


    function IngresarMonto(){

        monto = parseFloat (document.getElementById("Saldos").value);
    
       let aprob = false;
    
       if (monto + saldo <= Maximo){
    
        if (nombre === usuariook && monto != ""){
            aprob = true;
            saldo += monto;
            saldo = saldo;
            
        }

        if (aprob){

            let ElDepositoFueHecho = document.querySelector("#Acceso")

            ElDepositoFueHecho.innerHTML =
            
            `
            <div class="impresion">
            <h2 > ${nombre} Ahora Tu Saldo Es: $  ${saldo}</h2>
           </div>
           <h3 class = "container text-center"> Tu Deposito fue ejecutado correctamente Por la Cantidad de: $  ${monto}</h3>
           
           
           <button class = "container text-center" onClick="SesionIniciada()">Regresar</button>

           <br>
           
       
         


            `
        }
   
    
    
    
       }else {

        alert ("tu saldo es mayor a la cantiad aceptada")
       }

  }







  function restandoMontos(){


    let Paraingresar = document.querySelector ("#Tarjeta")
    Paraingresar.innerHTML =
    `
    <label for=""> Monto a Retirar:</label>
    <br>
    <input type="text" name="Saldos" id="Saldos">
    <button onClick="RestarMonto()" class= "paraboton">Ingresar Monto</button>

    `


}






  function RestarMonto(){

    monto = parseFloat (document.getElementById("Saldos").value);

   let aprob = false;

   if (monto - saldo <= Minimo){

    if (nombre === usuariook && monto != ""){
        aprob = true;
        saldo -= monto;
        saldo = saldo;
        
    }

    if (aprob){

        let ElDepositoFueHecho = document.querySelector("#Acceso")

        ElDepositoFueHecho.innerHTML =
        
        `
        <div class="impresion">
        <h2 > ${nombre} Ahora Tu Saldo Es: $  ${saldo}</h2>
       </div>
       <h2 > Tu Retiro por: $  ${monto} Fue realizado con exito </h2>
       <button class="btn btn-primary btn-lg" onClick="SesionIniciada()" >Regresar</button>

       <br>
       
   
     


        `
    }




   }else {

    alert ("tu saldo no puede ser menor a $10")
   }

}
