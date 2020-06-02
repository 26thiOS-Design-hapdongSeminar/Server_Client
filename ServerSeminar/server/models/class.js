const pool = require('../modules/pool');
const table = 'class';

const classModels = {
    getRecommendClass : async () => {
        const query = `SELECT * FROM ${table} AS a RIGHT JOIN classRecommend AS b ON (a.classIdx = b.classIdx)`;
        try {
            const result = await pool.queryParam(query);
            return result;
        } catch (err) {
            if (err.errno == 1062) {
                console.log('getRecommendClass : ', err.errno, err.code);
                return -1;
            }
            console.log('getRecommendClass : ', err);
            throw err;
        }
    },
    getProgressClassPopular : async () =>{
        const query = `SELECT * FROM ${table} AS a RIGHT JOIN progress AS b ON (a.classIdx = b.classIdx) WHERE status="p"`
        try {
            const result = await pool.queryParam(query);
            return result;
        } catch (err) {
            if (err.errno == 1062) {
                console.log('getProgressClassPopular : ', err.errno, err.code);
                return -1;
            }
            console.log('getProgressClassPopular : ', err);
            throw err;
        }
    },
    getClassReview : async () =>{
        const query = `SELECT a.classIdx, a.name, b.* FROM ${table} AS a JOIN review AS b ON (a.classIdx = b.classIdx)`;
        try {
            const result = await pool.queryParam(query);
            return result;
        } catch (err) {
            if (err.errno == 1062) {
                console.log('getClassReview : ', err.errno, err.code);
                return -1;
            }
            console.log('getClassReview : ', err);
            throw err;
        }
    }
}

module.exports = classModels;