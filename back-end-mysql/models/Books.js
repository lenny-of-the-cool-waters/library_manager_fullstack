module.exports = (sequelize, DataTypes) => {
  const Books = sequelize.define("Books", {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true
    },
    ISBN: {
      type: DataTypes.STRING,
    },
    bookName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    releaseDate: {
      type: DataTypes.DATE,
    },
    genre: {
      type: DataTypes.STRING,
    },
    bookSeries: {
      type: DataTypes.STRING,
    },
  });

  Books.associate = (models) => {
      Books.hasOne(models.Reviews)
      Books.hasOne(models.ReadingStats)
  }

  return Books;
};
