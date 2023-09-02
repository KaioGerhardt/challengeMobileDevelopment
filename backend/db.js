const sqlite3 = require('sqlite3').verbose();

class Database {
  constructor() {
    this.db = new sqlite3.Database('./database.sqlite', (err) => {
      if (err) {
        console.error('Erro ao abrir o banco de dados:', err.message);
      } else {
        console.log('Conexão com o banco de dados estabelecida.');
      }
    });
  }

  close() {
    this.db.close((err) => {
      if (err) {
        console.error('Erro ao fechar o banco de dados:', err.message);
      } else {
        console.log('Conexão com o banco de dados encerrada.');
      }
    });
  }

  query(sql, params = []) {
    return new Promise((resolve, reject) => {
      this.db.all(sql, params, (err, rows) => {
        if (err) {
          console.error('Erro na consulta:', err.message);
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }
}

module.exports = Database;