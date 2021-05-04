const operaciones = require('./operaciones')

test('Validar Hola Mundo', () => {
    expect(operaciones.holaMundo()).toBe('¡Hola Mundo!');
});

//Probar cada una de las funciones en el archivo Operaciones