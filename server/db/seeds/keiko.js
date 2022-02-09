/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('keiko').del()
    .then(function () {
      // Inserts seed entries
      return knex('keiko').insert([
        { id: 1, name: 'name of project', imageName: 'name of jpg file', gitRepos: 'link to exact repo', blogLink: 'link to blog page' },
        { id: 2, name: 'name of project', imageName: 'name of jpg file', gitRepos: 'link to exact repo', blogLink: 'link to blog page' },
        { id: 3, name: 'name of project', imageName: 'name of jpg file', gitRepos: 'link to exact repo', blogLink: 'link to blog page' }
      ])
    })
}
