module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Tariffs', [
      {
        name: 'ИМПЕРСКИЙ', description: 'Люк, я твой отец!', price: 150, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'РЕСПУБЛИКАНСКИЙ', description: 'Свободу сенатору Навальнусу', price: 250, createdAt: new Date(), updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Tariffs');
  },
};
