var tableName = 'fees';

exports.up = (pgm) => {
    pgm.createTable(tableName, {
        'id'                        : 'id',
        'fee'                       : 'decimal',
        'offer_id'  : {
            'type'       : 'id',
            'references' : 'offers ON DELETE CASCADE ON UPDATE CASCADE'
        },
        'available_from_quantity'   : 'integer',
        'available_to_quantity'     : 'integer',
        'available_at'              : 'timestamp',
        'expires_at'                : 'timestamp',
        'created_at'                : 'timestamp'
    });
};


exports.down = (pgm) => {
    pgm.dropTable(tableName);
};
