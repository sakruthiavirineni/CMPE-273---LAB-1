module.exports = (sequelize, DataTypes) => {
  const Items = sequelize.define("Items", {
    itemId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      unique: true,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER(11),
      references: {
        model: "Users",
        key: "id",
      },
    },
    itemName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    itemCategory: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    itemPrice: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    itemDescription: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    itemCount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    itemImage: {
      type: DataTypes.STRING,
    },
  });
  return Items;
};
const mongoose = require("mongoose");
const Userdb = require("./model");

var schema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Userdb,
  },
  itemName: {
    type: String,
    default: null,
  },
  itemCategory: {
    type: String,
    default: null,
  },
  itemPrice: {
    type: Number,
    default: null,
  },
  itemDescription: {
    type: String,
    default: null,
  },
  itemCount: {
    type: Number,
    default: null,
  },
  itemImage: {
    type: String,
    default: null,
  },
  sales: {
    type: Number,
    default: 0,
  },
});

const Items = mongoose.model("Items", schema);

module.exports = Items;

