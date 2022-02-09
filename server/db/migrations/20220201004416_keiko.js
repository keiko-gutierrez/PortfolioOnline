exports.up = function (knex) {
  return knex.schema.createTable('keiko', function (table) {
    table.increments('id').primary()
    table.string('name')
    table.string('imageName')
    table.string('gitRepos')
    table.string('blogLink')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('keiko')
}
