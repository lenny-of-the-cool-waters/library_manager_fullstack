module.exports = (sequelize, Sequelize,) => {
  const Users = sequelize.define("Users", {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    resetPassword: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    email: {
      type: Sequelize.STRING
    },
    role: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 1
    }
  });

  return Users;
};
