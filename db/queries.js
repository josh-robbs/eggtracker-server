const database = require("./db-connection")

module.exports = {
    list(tableName) {
        return database(tableName).select()
    },
    read(tableName, id) {
      return database(tableName).select().where('id', id)
    },
    post(tableName, newFoodItem) {
      return database(tableName)
        .insert(newFoodItem)
        .returning('*')
        .then(record => record[0])
    },
    update(tableName, id, newFoodItem) {
      return database(tableName)
        .update(newFoodItem)
        .where('id', id)
        .returning('*')
        .then(record => record[0])
    },
    deleteOne(tableName, id) {
      return database(tableName)
        .delete()
        .where('id', id)
    }
}