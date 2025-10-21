const FamilyModel = require('../models/family.model');

const FamilyController = {
  list: (req, res) => {
    res.render('family/list', { families: FamilyModel.getAll() });
  },

  showCreateForm: (req, res) => {
    res.render('family/create');
  },

  create: (req, res) => {
    const { familyName, origin, note } = req.body;
    FamilyModel.create({ name: familyName, origin, note });
    res.redirect('/family/list');
  }
};

module.exports = FamilyController;
