module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Admins', [
      {
        email: 'vid@yandex.ru', password: '12345', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        email: 'ann@gmail.com', password: '54321', createdAt: new Date(), updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Admins');
  },
};
