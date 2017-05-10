let pg = require('pg');

const pool = new pg.Pool(process.env.DATABASE_URL);

pool.on('error', function(error, client){
    console.error('client error', error.message, error.stack);
});

export class dbLibrary{
    query(unpreparedQuery, values, callback){
        console.info('Executing query: ', unpreparedQuery, values);
        return pool.query(unpreparedQuery, values, callback);
    }

    connect(callback){
        return pool.connect(callback);
    }
}