const ChangeCase = require('./index');

describe('ChangeCase test', () => {

    test('ChangeCase function is defined', () => {
        expect(typeof ChangeCase).toEqual('function');
    });
    test('null', () => {
        expect(ChangeCase()).toBeNull();
    });
    test('Check if the input is vowels', () => {
        expect(ChangeCase('aEoIu')).toEqual('aeoiu');;
    });
    test('Check if the input is Constant', () => {
        expect(ChangeCase('mnST')).toEqual('MNST');;
    });
    test('Check if the input is Even Number', () => {
        expect(ChangeCase('02468')).toEqual('');;
    });

    test('Check if the input is Odd Number', () => {
        expect(ChangeCase('13579')).toEqual('13579');;
    });
    test('Check mix string', () => {
        expect(ChangeCase('alphabet0123')).toEqual('aLPHaBeT13');;
    });

})

