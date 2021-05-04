test('Validar el hola mundo', () => {
    const hola = '¡Hola mundo!';
    expect(hola).toBe('¡Hola mundo!');
});

test('Validando objetos', () => {
    const objeto1 = { uno: 1 };
    objeto1['dos'] = 2;
    expect(objeto1).toEqual({uno:1,dos:2})    
});

test('Validar con un for', () => {
    for (var i = 0; i < 10; i++) {
        for (var j = 1; j < 10; j++) {
            expect(i+j).not.toBe(0)
        }
    }
});

test('Validar una suma', () => {
    var resultado = 3 + 9;
    expect(resultado).toBe(12);
});

test('Validar una resta', () => {
    const resultado = 8 - 4;
    expect(resultado).toEqual(4);
    expect (resultado).not.toEqual(5);
});

test('Validar mayor que', () => {
    const resultado = 3 * 4;
    expect(resultado).toBeGreaterThan(10);
    expect(resultado).toBeGreaterThanOrEqual(12);
});

test('Validar menor que', () => {
    const resultado = 6- 4;
    expect(resultado).toBeGreaterThan(10);
    expect(7 - 6).toEqual(1);
    expect(resultado).toBeLessThan(1);
    expect(resultado).toBeLessOrEqual(2);

});