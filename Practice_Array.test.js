const {sum, createMenu} = require('./Practice_Array');

describe('The Function sum', () => {
    it('Expect sum 3 + 5 equal 8', () => {
        expect(sum(3,5)).toBe(8);
    });
    it('Expect sum " " + 1 to be undifine ', () => {
        expect(sum(' ', 1)).toBeUndefined()
    });
    it('Expect sum "asd" + 1 to be NuN', () => {
        expect(sum('asd', 1)).toBe(NaN)
    });    
});
describe('The Function createMenu', () => {
    it('Expect createMenu toBe a Function', () => {
        expect(typeof createMenu).toBe('function')
    });
});





