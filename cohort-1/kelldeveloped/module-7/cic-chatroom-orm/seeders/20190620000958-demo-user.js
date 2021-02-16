'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      email: 'user1@thewebsite.com',
      name: 'User Number One',
      birthday: '1999-01-01',
      favoriteColor: 'blue',
      createdAt: '2019-01-01',
      updatedAt: '2019-01-01'
    }, {
      email: 'user2@thewebsite.com',
      name: 'User Number Two',
      birthday: '1998-01-01',
	    favoriteColor: 'red',
      createdAt: '2019-01-01',
      updatedAt: '2019-01-01'
    }, {
      email: 'user3@thewebsite.com',
      name: 'User Number Three',
      birthday: '1997-01-01',
	    favoriteColor: 'pink',
      createdAt: '2019-01-01',
      updatedAt: '2019-01-01'
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
