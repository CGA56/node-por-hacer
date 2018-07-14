const descripcion = {
    descripcion: {
        alias: 'd',
        demand: true
    }
}

const completado = {
    completado: {
        alias: 'c',
        default: true
    }
}

const argv = require('yargs')
    .command('crear', 'Crea una tarea', descripcion)
    .command('actualizar', 'Actualizado las tareas pendientes', {
        descripcion,
        completado
    })
    .command('listar', 'Listar las tareas pendientes.', {
        descripcion,
        completado

    })
    .command('eliminar', 'Eliminar  tareas pendientes.', descripcion)
    .command('filtrar', 'Filtrar las tareas por estado.', completado)
    .help()
    .argv;

module.exports = {
    argv
}