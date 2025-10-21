const MarriageModel = require('../models/marriage.model');

const MarriageController = {
  list: (req, res) => {
    res.render('marriage/list', { marriages: MarriageModel.getAll() });
  },

  showCreateForm: (req, res) => {
    res.render('marriage/create');
  },

  create: (req, res) => {
    const { husband, wife, date, note } = req.body;
    MarriageModel.create({ husband, wife, date, note });
    res.redirect('/marriage/list');
  }
};

module.exports = MarriageController;
