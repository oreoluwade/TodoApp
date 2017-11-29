import bcrypt from 'bcrypt-nodejs';

export default {
  User: (sequelize, DataTypes) => {
    var User = sequelize.define('User', {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
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
        classMethods: {
          associate(models) {
            // A User can create as many todos as possible
            User.hasMany(models.Todo, {
              onDelete: 'CASCADE',
              foreignKey: 'userId'
            })
          }
        },
        instanceMethods: {
          validPassword(password) {
            return bcrypt.compareSync(password, this.password);
          },


          hashPassword() {
            this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(9));
          }
        },
        hooks: {
          beforeCreate(user) {
            user.hashPassword();
          }
        }
      });
    return User;
  },
}
