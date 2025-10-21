const ParentChildModel = require('../models/parentchild.model');

const ParentChildController = {
  list: (req, res) => {
    res.render('parentchild/list', { relations: ParentChildModel.getAll() });
  },

  showCreateForm: (req, res) => {
    res.render('parentchild/create');
  },

  create: (req, res) => {
    const { parentName, childName, note } = req.body;
    ParentChildModel.create({ parentName, childName, note });
    res.redirect('/parentchild/list');
  }
};

module.exports = ParentChildController;
