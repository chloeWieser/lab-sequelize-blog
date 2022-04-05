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
      title: 'First Blog Post',
      body: 'This is my first ever blog post, like...ever.',
      userID: 1,
      isPublished: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      title: 'Listen up',
      body: 'I have so much to tell you.',
      userID: 2,
      isPublished: false,
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
