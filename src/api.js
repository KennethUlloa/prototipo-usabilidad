import flash from './imgs/the_flash.webp' 

export function getSucursales() {
    return [
        {
            nombre: "SCALA"
        },
        {
            nombre: "CCI"
        }
    ]
}

export function getListaDias() {
    let date = new Date()
    let dias = [];
    
    for(let i = 0; i < 5; i++) {
        let currDate = new Date();
        currDate.setDate(date.getDate() + i);
        dias.push(currDate);
        
    }

    return dias
}

export function getPeliculas() {
    
    return [
        {
            nombre: "Flash", 
            tiempo:"2h10m" ,
            tipo: 1,
            imagen: flash
        }
    ]
}