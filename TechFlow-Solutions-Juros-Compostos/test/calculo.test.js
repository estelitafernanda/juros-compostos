const { calcularJurosCompostos } = require('../src/calculo.js');

    describe("teste", function(){
        test('Calcula juros compostos corretamente', () => {
            expect(calcularJurosCompostos(1000, 0.05, 2)).toBe(102.5);
        });
        
        test('Retorna o mesmo valor para taxa de 0%', () => {
            expect(calcularJurosCompostos(1000, 0, 2)).toBe(0);
        });
    });


