module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define("Cart", {
    cartId: {
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
    itemId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    orderId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    qty: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
  });
  return Cart;
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
  qty: {
    type: Number,
    default: null,
  },
});

const Cart = mongoose.model("Cart", schema);

module.exports = Cart;
