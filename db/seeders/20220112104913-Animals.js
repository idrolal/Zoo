module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Animals', [
      {
        name: 'Енот Вася', description: 'Замечен в краже кошельков посетителей! Будьте осторожны!', photo: 'ссылка на фото енота', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Рысь Жора', description: 'Жора дружит с Енотом Васей! Как хорошо!', photo: 'ссылка на фото рыси', createdAt: new Date(), updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Animals');
  },
};
