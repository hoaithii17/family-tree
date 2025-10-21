// models/family.model.js
class Family {
  constructor(id, name, origin, note) {
    this.id = id;
    this.name = name;
    this.origin = origin;
    this.note = note;
  }
}

let families = [
  new Family(1, "Dòng họ Nguyễn", "Huế", "Dòng họ lâu đời miền Trung"),
  new Family(2, "Dòng họ Trần", "Hà Nội", "Có truyền thống hiếu học")
];

const FamilyModel = {
  getAll: () => families,

  getById: (id) => families.find(f => f.id === parseInt(id)),

  create: (data) => {
    const newId = families.length ? families[families.length - 1].id + 1 : 1;
    const newFamily = new Family(newId, data.name, data.origin, data.note);
    families.push(newFamily);
    return newFamily;
  },

  update: (id, updatedData) => {
    const index = families.findIndex(f => f.id === parseInt(id));
    if (index !== -1) {
      families[index] = { ...families[index], ...updatedData };
      return families[index];
    }
    return null;
  },

  delete: (id) => {
    families = families.filter(f => f.id !== parseInt(id));
  }
};

module.exports = FamilyModel;
