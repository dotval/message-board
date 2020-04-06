const express = require('express');
const router = express.Router();
const messagesController = require('../controllers/messagesController');

// 一覧表示ページ
router.get('/', (req, res) => {
  messagesController.index(req, res);
});

// 新規作成ページ
router.get('/new', (req, res) => {
  messagesController.new(req, res);
});

// 新規作成
router.post('/', (req, res) => {
  messagesController.create(req, res);
});

// 個別表示ページ
router.get('/:id', (req, res) => {
  messagesController.show(req, res);
});

// 編集ページ
router.get('/:id/edit', (req, res) => {
  messagesController.edit(req, res);
});

// 更新
router.put('/:id', (req, res) => {
  messagesController.update(req, res);
});

// 削除
router.delete('/:id', (req, res) => {
  messagesController.delete(req, res);
});

module.exports = router;