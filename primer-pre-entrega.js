let opUser 
let cuenta = []


class Cuentas{
    constructor(user, pass){
        this.user = user
        this.pass = pass
    }
}

function crearUser(){
    let user = prompt("Ingrese su nuevo usuario")
    let pass = prompt("Ingrese su nueva contraseña")
    let nuevoUser

    if(user !== ""){
        if(pass == ""){
            alert("Ingrese una contraseña valida")
            }else{
                alert("Usuario creado")
                nuevoUser = new Cuentas(user, pass)
            }
        }else{
            alert("Ingrese un usuario valido")
        }

    return nuevoUser
}

function login(){
    let opcion = prompt("Ingrese su usuario")

    for(let users of cuenta){
        if(opcion != users.user){
            alert("Usuario incorrecto")
        }else{
            opcion = prompt(`Bienvenido ${users.user} \nIngrese su contraseña`)
            if(opcion != users.pass){
                alert("Contraseña incorrecta")
            }else{
                alert(`Acceso permitido`)
            }
        }
    }
    return opcion
}

function menuLog(){
    const opp = parseInt(prompt("Ingrese una opcion \n1. Ingresar \n2. Registrate \n3. Salir"))
    return opp
}

function menu(){
    opselec = menuLog()

    while(opselec != 3){
    switch(opselec){
        case 1:
            opselec = login()
            break

        case 2:
            opUser = crearUser()
            opselec = cuenta.push(opUser)
            break

        default:
            alert("Ingrese una opcion valida")
            break
    }

    opselec = menuLog()
    }
}

menu()

