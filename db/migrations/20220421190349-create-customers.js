'use strict';

const { CUSTOMER_TABLE, CustomerSchema } = require('./../models/customer.model');

module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(CUSTOMER_TABLE, CustomerSchema);
  },

  async down (queryInterface) {
    await queryInterface. drop (CUSTOMER_TABLE);
  }
};
