'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class blogs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.blogs.belongsTo(models.users, {foreignKey: 'userID'})  //BASED ON SEQUELISE SLIDE 30 TEMPLATE Player.belongsTo(Team);
    }
  }
  blogs.init({
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    userID: DataTypes.INTEGER,
    isPublished: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'blogs',
  });
  return blogs;
};