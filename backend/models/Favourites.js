module.exports = (sequelize, DataTypes) => {
  const Favourites = sequelize.define("Favourites", {
    favId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      unique: true,
      autoIncrement: true,
      primaryKey: true,
    },
    itemId: {
      type: DataTypes.INTEGER(11),
      references: {
        model: "Items",
        key: "itemId",
      },
    },
    userId: {
      type: DataTypes.INTEGER(11),
      references: {
        model: "Users",
        key: "id",
      },
    },
  });
  return Favourites;
};
const mongoose = require("mongoose");
const Userdb = require("./model");
const Items = require("./items");

var schema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Userdb,
  },
  itemId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Items,
  },
});

const Favourites = mongoose.model("Favourites", schema);

module.exports = Favourites;
