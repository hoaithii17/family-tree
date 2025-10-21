// models/personalModel.js
const db = require('../config/db'); // nếu bạn dùng MySQL hoặc MongoDB, đổi theo cấu trúc của bạn

class Personal {
  constructor(personId, fullName, birthYear, role, generation, note) {
    this.personId = personId;
    this.fullName = fullName;
    this.birthYear = birthYear;
    this.role = role;
    this.generation = generation;
    this.note = note;
  }

  static getAll(callback) {
    const sql = "SELECT * FROM personal";
    db.query(sql, callback);
  }

  static create(data, callback) {
    const sql = "INSERT INTO personal SET ?";
    db.query(sql, data, callback);
  }

  static findById(id, callback) {
    const sql = "SELECT * FROM personal WHERE personId = ?";
    db.query(sql, [id], callback);
  }

  static update(id, data, callback) {
    const sql = "UPDATE personal SET ? WHERE personId = ?";
    db.query(sql, [data, id], callback);
  }

  static delete(id, callback) {
    const sql = "DELETE FROM personal WHERE personId = ?";
    db.query(sql, [id], callback);
  }
}

module.exports = Personal;
