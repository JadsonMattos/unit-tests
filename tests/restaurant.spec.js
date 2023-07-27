const createMenu = require('../src/restaurant');
 
describe('10 - Implemente a função `createMenu`, bem como seus casos de teste', () => {
  it('Verifica se a função `createMenu` tem o comportamento esperado', () => {
    // Escreva todos os testes aqui.
    expect(createMenu()).toHaveProperty('fetchMenu');

    expect(typeof createMenu().fetchMenu).toBe('function');

    const actual = createMenu({ food: {}, drinks: {} });
    const expected = ['food', 'drinks'];
    expect(Object.keys(actual.fetchMenu())).toEqual(expected);

    const menu = {food: {coxinha: 3.90, sanduiche: 9.90}, drinks: {agua: 3.90, cerveja: 6.90}};
    expect(createMenu(menu).fetchMenu()).toEqual(menu);

    expect(createMenu(menu).consumption).toEqual([]);

    expect(() => createMenu(menu).order('picanha')).toThrowError('Item indisponível');
    expect(createMenu(menu).consumption).toEqual([]);
    // createMenu(menu).order('picanha');

    const iteration = createMenu(menu);
    iteration.order('coxinha');
    expect(iteration.consumption).toEqual(['coxinha']);
    iteration.order('agua');
    expect(iteration.consumption).toEqual(['coxinha', 'agua']);

    iteration.order('coxinha');
    expect(iteration.consumption).toEqual(['coxinha', 'agua', 'coxinha']);

    const priceFinal = (3.90 + 3.90 + 3.90) * 1.1; 
    expect(iteration.pay()).toBe(priceFinal);
  });
});
