const path = require('path');
const dbPath = path.resolve(__dirname, './database.sqlite');

const knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: dbPath,
    },
    useNullAsDefault: true,
});

knex.schema
    .hasTable('user')
    .then((exists) => {
        if (!exists) {
            return knex.schema.createTable('user', (table) => {
                table.increments('id').primary(),
                    table.string('username').unique(),
                    table.string('pass').notNullable()
            })
                .then(() => {
                    console.log('Table \'user \' has been created.');
                })
                .catch((err) => {
                    console.error(`Table 'user' could not be created.\n${err}`);
                });
        }
    })
    .then(() => {
        console.log('Table \'user\' is ready.');
    })
    .catch((err) => {
        console.error(`Table 'user' is not ready.\n${err}`);
    });

knex.schema
    .hasTable('question')
    .then((exists) => {
        if (!exists) {
            return knex.schema.createTable('question', (table) => {
                table.increments('id').primary(),
                    table.string('question').unique().notNullable(),
                    table.string('correct').notNullable(),
                    table.string('incorrect1').notNullable(),
                    table.string('incorrect2').notNullable(),
                    table.string('incorrect3').notNullable()
            })
                .then(() => {
                    console.log('Table \'question\' has been created.');
                })
                .catch((err) => {
                    console.error(`Table 'question' could not be created.\n${err}`);
                })
        }
    })
    .then(() => {
        console.log('Table \'question\' is ready');
    })
    .catch((err) => {
        console.error(`Table 'question' is not ready.\n${err}`);
    });

knex.schema
    .hasTable('tiebreak')
    .then((exists) => {
        if (!exists) {
            return knex.schema.createTable('tiebreak', (table) => {
                table.increments('id').primary(),
                    table.string('question').unique(),
                    table.integer('answer').notNullable()
            })
                .then(() => {
                    console.log('Table \'tiebreak \' has been created.');
                })
                .catch((err) => {
                    console.error(`Table 'tiebreak' could not be created.\n${err}`);
                });
        }
    })
    .then(() => {
        console.log('Table \'tiebreak\' is ready.');
    })
    .catch((err) => {
        console.error(`Table 'tiebreak' is not ready.\n${err}`);
    });