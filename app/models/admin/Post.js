module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define('Post', {
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
        Post.belongsTo(models.SubDomain)
        Post.belongsTo(models.User)
        Post.belongsTo(models.Account)
      }
    }
  })
 
  return Post
}