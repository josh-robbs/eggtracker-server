exports.seed = function(knex, Promise) {
  return knex('foodstuff').del()
}