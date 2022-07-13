import calculate from "./__mocks__/calculate";
describe('calculate', () => {

test("should return the correct result", () => {
    const obj = {total: '0', next: '0', operation: 'x'};
    expect(calculate(obj, 'AC')).toEqual({total: null, next: null, operation: null});
})

test("Number of button if there is an operation", () => {
    const obj = { total: '2', next: '0', operation: 'x' };
    const btn = '2';
    expect(calculate(obj, btn)).toStrictEqual({ total: '2', next: '2', operation: 'x' });  
})

let result = {total:'0' , next:'0' }

test("5 - 3 should be 2", () => {
result = calculate(result, '5');
result = calculate(result, '-');
result = calculate(result, '3');
result = calculate(result, '=');
    expect(result.total).toBe('2');
})

test('8 / 2 should be equale to 4', () => {
    result = calculate(result, '8');
    result = calculate(result, '÷');
    result = calculate(result, '2');
    result = calculate(result, '=');
    expect(result.total).toBe('4');
  });


test('8 % 2 should be equale to 0', () => {
    result = calculate(result, '8');
    result = calculate(result, '%');
    result = calculate(result, '2');
    result = calculate(result, '=');
    expect(result.total).toBe('0');
  })
})






