module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Tariffs', [
      {
        name: 'Детский', description: 'Для детей до 12 лет', price: 150, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Взрослый', description: 'Для всех, кто старше 12 лет', price: 250, createdAt: new Date(), updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Tariffs');
  },
};
