const bitCount = require('./index');

describe('bitCount test', () => {

    test('bitCount function is defined', () => {
        expect(typeof bitCount).toEqual('function');
    });
    test('null', () => {
        expect(bitCount()).toBeNull();
    });
    test('Check if the input is number', () => {
        expect(bitCount('shaw')).toBeUndefined();;
    });
    test('bitCount value parameter less than 99', () => {
        expect(bitCount(100)).toBeUndefined();
    });
    test('bitCount value parameter greater than or equal  0', () => {
        expect(bitCount(-1)).toBeUndefined();
    });

    test('Calculate correct bitCount value for 5', () => {
        expect(bitCount(5)).toEqual('101 100 11 10 01 00');
        expect(bitCount())
    });
})

