const { DESCRIBE } = require("sequelize/types/query-types");

DESCRIBE("[APP] Esta es la prueba general", () =>{
    TextDecoderStream("esto deberia retornar", () =>{
        const a = 4;
        const b = 4;
        const total = a + b;
        expect(total).toEqual(5);
    });
});