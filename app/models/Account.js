module.exports = function(sequelize, DataTypes) {
  var Account = sequelize.define('Account', {
    id: {
         type     : DataTypes.INTEGER,
         allowNull: false,
         primaryKey: true,
         autoIncrement: true
    },
    domain: {
      type     : DataTypes.STRING,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        Account.hasMany(models.User);
        Account.hasMany(models.SubDomain);
      }
    }
  })
 
  return Account
}