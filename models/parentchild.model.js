// models/parentchild.model.js
class ParentChild {
  constructor(id, parentName, childName, note) {
    this.id = id;
    this.parentName = parentName;
    this.childName = childName;
    this.note = note;
  }
}

let relations = [
  new ParentChild(1, "Nguyễn Văn Minh", "Nguyễn Thị Hoa", "Con gái đầu"),
  new ParentChild(2, "Nguyễn Văn Minh", "Nguyễn Văn An", "Con trai út")
];

const ParentChildModel = {
  getAll: () => relations,

  getById: (id) => relations.find(r => r.id === parseInt(id)),

  create: (data) => {
    const newId = relations.length ? relations[relations.length - 1].id + 1 : 1;
    const newRelation = new ParentChild(newId, data.parentName, data.childName, data.note);
    relations.push(newRelation);
    return newRelation;
  },

  delete: (id) => {
    relations = relations.filter(r => r.id !== parseInt(id));
  }
};

module.exports = ParentChildModel;
