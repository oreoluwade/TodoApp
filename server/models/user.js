import bcrypt from 'bcrypt';

const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    hooks: {
      beforeCreate(user) {
        user.hashPassword();
      },
    },
  });

  // Class method
  User.associate = (models) => {
    User.hasMany(models.Todo, {
      onDelete: 'CASCADE',
      foreignKey: 'userId',
    });
  };

  // Instance methods
  User.prototype.hashPassword = function hashPassword() {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(9));
  };

  User.prototype.validPassword = function validPassword(password) {
    bcrypt.compareSync(password, this.password);
  };

  return User;
};


export default UserModel;
