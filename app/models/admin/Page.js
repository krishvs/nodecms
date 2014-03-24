module.exports = function(sequelize, DataTypes) {
  var Page = sequelize.define('Page', {
    id: {
         type     : DataTypes.INTEGER,
         allowNull: false,
         primaryKey: true,
         autoIncrement: true
    },
    path: {
      type     : DataTypes.STRING,
      allowNull: false
    },
    content: {
      type     : DataTypes.STRING,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        Page.belongsTo(models.SubDomain)
      }
    }
  })
 
  return Page
}