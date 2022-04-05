'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }, {
     *    name: 'John Doe',
     *   isBetaMember: false}
     * ], {});
    */

     await queryInterface.bulkInsert('users', [{
      firstName: 'John',
      lastName: 'Doe',
      email: 'jd@email.com',
      isPublished: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      firstName: 'Mary',
      lastName: 'Williams',
      email: 'mw@email.com',
      isPublished: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ], {});
  },

async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};


