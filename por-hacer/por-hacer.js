const fs = require('fs');
let listadoPorHacer = [];

const guardarDataBase = () => {



    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('DB/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar'.err);

    });
    // return porHacer;


}

const getListadoFiltrado = (completado) => {
    cargarDb();
    let aux_completado = completado.toString();
    console.log(aux_completado);

    let nvoArreglo = listadoPorHacer.filter(tarea => {
        return tarea.completado.toString() === aux_completado;
    })
    console.log(nvoArreglo);
    if (nvoArreglo.length > 0) {
        return nvoArreglo;
    } else {
        return "";
    }





}


const getListado = () => {

    let datos = "";
    cargarDb();
    if (listadoPorHacer.length > 0) {
        // datos =   JSON.stringify(listadoPorHacer);
        datos = listadoPorHacer;
    }

    return datos;
}


let cargarDb = () => {

    try {
        listadoPorHacer = require('../DB/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }


}

let actualizar = (descripcion, completado = true) => {
    cargarDb();
    let indexPosition = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });

    if (indexPosition >= 0) {
        listadoPorHacer[indexPosition].completado = completado;
        guardarDataBase();
        return true;
    } else {
        return false;
    }
}


let eliminar = (descripcion) => {
    cargarDb();

    let nuevoListado = listadoPorHacer.filter(tarea => {
        return tarea.descripcion !== descripcion;
    });

    if (listadoPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        // guardarDataBase();
        listadoPorHacer = nuevoListado;
        guardarDataBase();
        return true;
    }



}

const crear = (descripcion) => {

    cargarDb();
    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);

    guardarDataBase();
    return porHacer;
}


module.exports = {
    crear,
    getListado,
    actualizar,
    eliminar,
    getListadoFiltrado
}