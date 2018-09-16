exports.up = function(knex, Promise) {
  return knex.schema.createTable('foodstuff', food => {
    food.increments()
    food.string('category')
    food.string('brand')
    food.string('name')
    food.string('img')
    food.float('quantity')
    food.dateTime('time_updated', 0).defaultTo(knex.fn.now(0))
    food.dateTime('last_added', 0).defaultTo(knex.fn.now(0))
    food.string('location')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('foodstuff')
};