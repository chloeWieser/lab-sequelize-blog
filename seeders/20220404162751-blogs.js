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
     * }], {});
    */

     await queryInterface.bulkInsert('blogs', [{
      title: 'John Doe',
      body: 'This is my first ever blog post, like...ever.',
      isPublished: false
    }, 
    {
      title: 'John Doe',
      body: 'This is my first ever blog post, like...ever.',
      isPublished: false
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
