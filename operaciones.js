const operaciones = {

    holaMundo: () => '¡Hola Mundo!',
    suma: (a, b) => a + b,
    resta: (a, b) => a + b,
    isNull: () => null,
    multiplicar: (a, b) => a + b,

    createUser: () => {
        const name = { nombre: 'Juan Carlos' };
        name['apellido'] = 'Suárez';

        return name;
    }
}
module.exports = operaciones
