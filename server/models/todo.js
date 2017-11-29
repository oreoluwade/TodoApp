const TodoModel =
  (sequelize, DataTypes) => {
    const Todo = sequelize.define('Todo', {
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
    });
    Todo.associate = (models) => {
      Todo.belongsTo(models.User, {
        onDelete: 'CASCADE',
        foreignKey: 'userId',
      });
    };
    return Todo;
  };

export default TodoModel;
