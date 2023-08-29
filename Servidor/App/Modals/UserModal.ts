import { DataTypes, Model } from "sequelize";
import Connection from "../DB/Connection";

class UserModal extends Model {}

UserModal.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    typeUser: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: Connection.sequelize,
    modelName: "UserModal",
    tableName: "userTable",
  }
);

export default UserModal;
