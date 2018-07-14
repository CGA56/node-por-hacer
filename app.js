// const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const colors = require('colors');
const porHacer = require('./por-hacer/por-hacer');




let comando = argv._[0];

switch (comando) {
    case 'crear':
        console.log("crear por hacer");
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        console.log("Listar las tareas por hacer");
        let listado = porHacer.getListado();
        // console.log(listado);
        if (listado.length > 0) {
            for (let tarea of listado) {
                console.log('=======POR HACER=========');
                console.log(tarea.descripcion);
                console.log('Tarea :', tarea.completado);
                console.log('========================='.green);
            }
        } else {
            console.log('La base de datos no cuenta con registros.');
        }


        break;
    case 'actualizar':
        console.log("Actualizar las tareas por hacer.");
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'eliminar':
        console.log('Eliminar una tarea por hacer.');
        let borrado = porHacer.eliminar(argv.descripcion);
        console.log(borrado);
        break;
    case 'filtrar':
        console.log('Filtrar por estado de tarea');
        let listadoFiltrado = porHacer.getListadoFiltrado(argv.completado);
        if (listadoFiltrado.length > 0) {

            for (let tarea of listadoFiltrado) {
                console.log('=======POR HACER=========');
                console.log(tarea.descripcion);
                console.log('Tarea :', tarea.completado);
                console.log('========================='.green);
            }
        } else {
            console.log('No existen coincidencias');
        }
        break;
    default:
        console.log("Esta opcion no es valida.");
}