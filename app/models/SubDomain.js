module.exports = function(sequelize, DataTypes) {
  var SubDomain = sequelize.define('SubDomain', {
    id: {
         type     : DataTypes.INTEGER,
         allowNull: false,
         primaryKey: true,
         autoIncrement: true
    },
    domain: {
         type     : DataTypes.STRING,
         allowNull: false,
         primaryKey: true
    }
  }, {
    classMethods: {
      associate: function(models) {
        SubDomain.belongsTo(models.Account);
        SubDomain.hasMany(models.User)
      }
    }
  })
 
  return SubDomain
}