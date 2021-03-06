exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists('ACTION', function(table) {
        table
            .increments('actionid')
            .unsigned()
            .primary()
            .comment('Action ID');
        table
            .string('action', 64)
            .notNullable()
            .comment('Description of action');
    });
};

exports.down = function(knex, Promise) {
    if (process.env.NODE_ENV !== 'production') {
        return knex.schema.dropTableIfExists('ACTION');
    } else {
        throw new Error('dont drop stuff in production');
    }
};
