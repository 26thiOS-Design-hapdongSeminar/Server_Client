const pool = require('../modules/pool');
const table = 'product';

const product = {
    getRecommendProduct : async()=>{
        query = `SELECT * FROM ${table} AS a RIGHT JOIN productRecommend AS b ON (a.productIdx = b.productIdx)`;
        try {
            const result = await pool.queryParam(query);
            return result;
        } catch (err){
            if (err.errno == 1062) {
                console.log('getRecommendProduct : ', err.errno, err.code);
                return -1;
            }
            console.log('getRecommendProduct : ', err);
            throw err;
        }
    },
    getLiveProduct : async ()=>{
        query = `SELECT * FROM ${table} AS a RIGHT JOIN productLive AS b ON (a.productIdx = b.productIdx)`;
        try {
            const result = await pool.queryParam(query);
            return result;
        } catch (err){
            if (err.errno == 1062) {
                console.log('getLiveProduct : ', err.errno, err.code);
                return -1;
            }
            console.log('getLiveProduct : ', err);
            throw err;
        }
    }
}

module.exports = product;