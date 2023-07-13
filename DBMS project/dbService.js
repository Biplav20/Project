const mysql = require('mysql');
const dotenv = require('dotenv');
let instance = null;
dotenv.config();
const connection = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'password',
    database: 'db_college',

});

connection.connect((err) => {
    if (err) {
        console.log(err);
    }

});

class DbService {
    static getDbServiceInstance() {
        return instance ? instance : new DbService();
    }
    async getAllData() {
        try {
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM tbl_Students;";
                connection.query(query, (error, results) => {
                    if (error) reject(new Error(error.message));
                    resolve(results);
                });
            });
            //console.log(response);
            return response;
        } catch (error) {
            console.log(error);
        }
    }
    async insertNewName(roll,name, address){
        console.log(roll);
        console.log(name);
        console.log(address);

        try{
            const insertId = await new Promise((resolve, reject) => {
                const query = "INSERT INTO tbl_Students (RollNum,Name,Address) VALUES (?,?,?);";
                connection.query(query,[roll,name,address],(error, result) => {
                    if (error) reject(new Error(error.message));
                    resolve(result.insertId);
                });
            });
            //return response;
        } catch(error){
            console.log(error);
        }
    }
    
}

module.exports = DbService;