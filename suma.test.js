const suma = require('./suma');

test('Comprobar que la suma de 3+1 es igual que 4', () => {
    expect(suma(3,1)).toBe(4);
 });