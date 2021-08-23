// import SQLite from 'react-native-sqlite-storage'

// class SQLite3 {
//     constructor(){
//         SQLite.DEBUG(true)
//         SQLite.enablePromise(true)
//         this.conn = SQLite.openDatabase("androidProject.db", "1.0", "Test Database", 200000, this.openCB, this.errorCB)

//         this.conn.executeSql('create table if not exits user(username text primary key, password text)')
//         .finally(() => {this.conn.executeSql('insert into user values(?,?)',['admin','123'])
//         .then(() => console.log('successfully insert into users:'))
//         .catch(() => console.log('failed to insert user:'))
//         })
//     }

//     openCB = () => {
//         console.log("Database OPENED");
//     }

//     errorCB = (err) => {
//         console.log("SQL Error: " + err);
//     }

//     successCB = () => {
//         console.log("SQL executed fine");
//     }


// }

// export default SQLite3;