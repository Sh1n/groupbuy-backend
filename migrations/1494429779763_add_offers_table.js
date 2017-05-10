var tableName = "offers";
exports.up = (pgm) => {
    pgm.createTable(tableName, {
        'id'    : 'id',
        'title' : 'string',
        'description' : 'text',
        'img'   : 'string',
        'price' : 'decimal',
        'discount' : 'decimal',
        'qnt_target' : 'integer',
        'qnt_reached': 'integer',
        'expires_at': 'timestamp',
        'created_at': 'timestamp'
    });
};

exports.down = (pgm) => {
    pgm.dropTable(tableName);
};
