import express from 'express';
import expressLayouts from 'express-ejs-layouts';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Tạo __dirname cho môi trường ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;

// Cấu hình EJS và layout
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Cho phép truy cập file tĩnh (CSS, ảnh,...)
app.use(express.static(path.join(__dirname, 'public')));

// ================== ROUTES ==================

// Trang chủ → chuyển đến /family
app.get('/', (req, res) => res.redirect('/family'));

// ---------------- GIA TỘC ----------------
app.get('/family', (req, res) => {
  res.render('family/list', { layout: 'layout', title: 'Gia tộc' });
});

app.get('/family/create', (req, res) => {
  res.render('family/create', { layout: 'layout', title: 'Thêm Gia tộc' });
});

// ---------------- THÀNH VIÊN ----------------
app.get('/personal', (req, res) => {
  res.render('personal/list', { layout: 'layout', title: 'Thành viên' });
});

app.get('/personal/create', (req, res) => {
  res.render('personal/create', { layout: 'layout', title: 'Thêm Thành viên' });
});

// ---------------- HÔN NHÂN ----------------
app.get('/marriage', (req, res) => {
  res.render('marriage/list', { layout: 'layout', title: 'Hôn nhân' });
});

app.get('/marriage/create', (req, res) => {
  res.render('marriage/create', { layout: 'layout', title: 'Thêm Hôn nhân' });
});

// ---------------- QUAN HỆ CHA/MẸ - CON ----------------
app.get('/parentchild', (req, res) => {
  res.render('parentchild/list', { layout: 'layout', title: 'Quan hệ Cha-Con' });
});

app.get('/parentchild/create', (req, res) => {
  res.render('parentchild/create', { layout: 'layout', title: 'Thêm Quan hệ Cha-Con' });
});

// ---------------- SƠ ĐỒ ----------------
app.get('/familytree', (req, res) => {
  res.render('familytree/list', { layout: 'layout', title: 'Sơ đồ' });
});

// =============================================

// Chạy server
app.listen(port, () => {
  console.log(`✅ Server đang chạy tại: http://localhost:${port}`);
});
