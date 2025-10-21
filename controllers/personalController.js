// controllers/personalController.js
const Personal = require('../models/personalModel');

// Hiển thị danh sách cá nhân
exports.list = (req, res) => {
  Personal.getAll((err, results) => {
    if (err) throw err;
    res.render('personal/list', { personals: results });
  });
};

// Hiển thị form thêm cá nhân
exports.createForm = (req, res) => {
  res.render('personal/create');
};

// Xử lý thêm cá nhân mới
exports.create = (req, res) => {
  const data = {
    fullName: req.body.fullName,
    birthYear: req.body.birthYear,
    role: req.body.role,
    generation: req.body.generation,
    note: req.body.note
  };
  Personal.create(data, (err) => {
    if (err) throw err;
    res.redirect('/personal/list');
  });
};

// Xóa thành viên
exports.delete = (req, res) => {
  const id = req.params.id;
  Personal.delete(id, (err) => {
    if (err) throw err;
    res.redirect('/personal/list');
  });
};
