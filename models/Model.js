module.exports = function(sequelize, DataTypes) {
    var Fish = sequelize.define("Fish", {
      
      lakeName: DataTypes.STRING,
    });
  
    return Fish;
  };
  