import { DataTypes, Model } from "sequelize";
import Connection from "../DB/Connection";

class ProductModal extends Model {}

ProductModal.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    nameProduct: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    qtde: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: Connection.sequelize,
    modelName: "ProductModal",
    tableName: "productTable",
  }
);

export default ProductModal;
