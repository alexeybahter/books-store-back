import {DataTypes, Model, Sequelize} from "sequelize";

export class Book extends Model {

  public static findAllBooks() {
    return Book.findAll({
      attributes: ["id", "title", "description", "price"]
    });
  }

  public static findOneUser(id) {
    return Book.findOne({
      where: { id },
      attributes: ["id", "title", "description", "price"]
    });
  }

  public static createBook(params) {
    return Book.create({
      ...params
    });
  }

  public id!: number;
  public title: string;
  public description: string;
  public price: string;

}

const attributes = {
  title: {type: new DataTypes.STRING(), allowNull: false},
  description: {type: new DataTypes.STRING(), allowNull: false},
  price: {type: new DataTypes.STRING(), allowNull: false}
};

export function initBook(sequelize: Sequelize) {
  Book.init(attributes, {sequelize});
}
