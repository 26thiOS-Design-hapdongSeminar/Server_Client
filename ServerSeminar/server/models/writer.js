const pool = require('../modules/pool');
const table = 'writer';

const writer = {
    getWriter : async()=>{
        query = `SELECT * from writer`;
        try {
            const result = await pool.queryParam(query);
            return result;
        } catch (err){
            if (err.errno == 1062) {
                console.log('getWriter : ', err.errno, err.code);
                return -1;
            }
            console.log('getWriter : ', err);
            throw err;
        }
    }
}

module.exports = writer;