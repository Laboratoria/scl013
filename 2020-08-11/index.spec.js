const { getPizzaSync, getPizzaAsync, getPizzaPromise } = require('.');

describe('getPizzaSync', () => {
  it('debería retornar una pizza peperoni por defecto', () => {
    expect(getPizzaSync()).toBe('🍕');
  });

  it('debería retornar una pizza peperoni cuando pedimos peperoni', () => {
    expect(getPizzaSync('peperoni')).toBe('🍕');
  });

  it('debería arrojar cuando tipo de pizza desconocido', () => {
    expect(() => getPizzaSync('margarita'))
      .toThrow(/Tipo de pizza desconocido/);
  });

  it('debería arrojar cuando tipo de pizza desconocido', () => {
    // try {
    //   throw new Error('OMG');
    // } catch (err) {
    //   console.log(err);
    // }

    // try {
    //   getPizzaSync('margarita');
    // } catch (err) {
    //   console.log(err);
    // }

    expect(() => getPizzaSync('margarita'))
      .toThrow(/Tipo de pizza desconocido/);
  });
});

describe('getPizzaAsync', () => {
  it('debería invocar callback con una pizza peperoni', (done) => {
    getPizzaAsync('peperoni', (err, pizza) => {
      expect(err).toBeNull();
      expect(pizza).toBe('🍕');
      done();
    });
  });

  it('debería invocar callback con error cuando pizza desconocida', (done) => {
    getPizzaAsync('margarita', (err) => {
      expect(err instanceof Error).toBe(true);
      expect(err.message).toBe('Tipo de pizza desconocido! margarita');
      done();
    });
  });
});

describe('getPizzaPromise', () => {
  it('debería retornar una promesa que resuelve a una pizza', () => {
    const promise = getPizzaPromise();

    return promise.then((pizza) => {
      expect(pizza).toBe('🍕');
    });
  });

  it('debería retornar una promesa que resuelve a una pizza', async () => {
    const pizza = await getPizzaPromise();
    expect(pizza).toBe('🍕');
  });

  it('debería retornar una promesa que rechaza cuando pizza desconocida', () => {
    return getPizzaPromise('margarita')
      .catch((err) => {
        expect(err instanceof Error).toBe(true);
        expect(err.message).toBe('Tipo de pizza desconocido! margarita');
      });
  });

  it('debería retornar una promesa que rechaza cuando pizza desconocida', async () => {
    try {
      await getPizzaPromise('margarita');
    } catch (err) {
      expect(err instanceof Error).toBe(true);
      expect(err.message).toBe('Tipo de pizza desconocido! margarita');
    }
  });
});
