/* eslint-disable max-len */
// Siga as orientações do README!

const createMenu = (menu) => {
  const consumption = [];
  return {
    fetchMenu: () => menu,
    consumption,
    order: (string) => {
      if (!(string in menu.food) && !(string in menu.drinks)) {
        throw new Error('Item indisponível');
      // } else {
        // console.log('Item indisponível');
      }
      consumption.push(string);
    },
    pay: () => {
      let priceFinal = 0;
      consumption.forEach((string) => {
        if (string in menu.food) {
          priceFinal += menu.food[string];
        }
        if (string in menu.drinks) {
          priceFinal += menu.drinks[string];
        }
      });
      return priceFinal * 1.1;
    },
  };
};

module.exports = createMenu;
