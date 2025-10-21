// models/marriage.model.js
class Marriage {
  constructor(id, husband, wife, date, note) {
    this.id = id;
    this.husband = husband;
    this.wife = wife;
    this.date = date;
    this.note = note;
  }
}

let marriages = [
  new Marriage(1, "Nguyễn Văn Minh", "Lê Thị Mai", "2001-05-15", "Hạnh phúc, 2 con"),
];

const MarriageModel = {
  getAll: () => marriages,

  getById: (id) => marriages.find(m => m.id === parseInt(id)),

  create: (data) => {
    const newId = marriages.length ? marriages[marriages.length - 1].id + 1 : 1;
    const newMarriage = new Marriage(newId, data.husband, data.wife, data.date, data.note);
    marriages.push(newMarriage);
    return newMarriage;
  },

  delete: (id) => {
    marriages = marriages.filter(m => m.id !== parseInt(id));
  }
};

module.exports = MarriageModel;
