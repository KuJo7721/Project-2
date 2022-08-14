const User = require('./User');
const Homework = require('./Homework');

User.hasMany(Homework, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Homework.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Homework };
