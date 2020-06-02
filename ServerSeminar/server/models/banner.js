const pool = require('../modules/pool');
const table = 'banner';

//배너 조회
const banner = {
    getBanner : async () =>{
        query = `SELECT * FROM ${table}`;
        try {
            const result = pool.queryParam(query);
            return result;
        } catch (err) {
            if (err.errno == 1062) {
                console.log('getBanner : ', err.errno, err.code);
                return -1;
            }
            console.log('getBanner : ', err);
            throw err;
        }
    }
}

module.exports = banner;