module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    id: {
         type     : DataTypes.INTEGER,
         allowNull: false,
         primaryKey: true,
         autoIncrement: true
    },
    username: {
         type     : DataTypes.STRING,
         allowNull: false,
         primaryKey: true
    },
    password: {
        type     : DataTypes.STRING,
        allowNull: false
    },
    email: {
      type  : DataTypes.STRING,
      allowNull: false 
    }
  }, {
    classMethods: {
      associate: function(models) {
        User.belongsTo(models.Account);
        User.belongsTo(models.SubDomain);
      }
    }
  })
 
  return User
}