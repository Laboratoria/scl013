exports.getPizzaSync = (type = 'peperoni') => {
  // hacer la masa
  // preparar ingredientes
  // armar la pizza
  // hornear
  // empacar...

  if (type === 'peperoni') {
    return '🍕'; // early return
  }

  throw new Error(`Tipo de pizza desconocido! ${type}`);
};

exports.getPizzaAsync = (type, callback) => {
  setTimeout(() => {
    if (type !== 'peperoni') {
      return callback(new Error(`Tipo de pizza desconocido! ${type}`));
    }
    callback(null, '🍕');
  }, 1 * 1000);
  // return undefined;
};

// exports.getPizzaPromise = () => Promise.resolve('🍕');

exports.getPizzaPromise = (type = 'peperoni') => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (type !== 'peperoni') {
      return reject(new Error(`Tipo de pizza desconocido! ${type}`));
    }
    resolve('🍕');
  }, 1 * 1000);
});
