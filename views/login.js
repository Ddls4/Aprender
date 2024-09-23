let enviar = ()=>{ 
    let nombre= document.querySelector("#nombre")
    nombre.value
    fetch("localhost/login",{
        method: 'POST',
        headers:{
            'Contesnt-Type':'application/jason'
        },
        body: JSON.stringify(nombre.value)
    })
}