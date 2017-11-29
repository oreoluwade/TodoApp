export default {
  Todo: (sequelize, DataTypes) => {
    var Todo = sequelize.define('Todo', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      completed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    }, {
        classMethods: {
          associate(models) {
            // A Todo cannot exist without a user
            Todo.belongsTo(models.User, {
              onDelete: 'CASCADE',
              foreignKey: 'userId'
            })
          }
        }
      });
    return Todo;
  },
}
