const skills = [
  { id: 111111, skillName: "JavaScript" },
  { id: 222222, skillName: "CSS" },
  { id: 333333, skillName: "HTML" },
];

module.exports = {
  getAllSkills,
  getOneSkill,
  create,
  deleteOne,
  update,
};

function update(id, skill) {
  const index = skills.findIndex((el) => el.id === parseInt(id));
  skill.id = parseInt(id);
  skills.splice(index, 1, skill);
}

function getOneSkill(id) {
  return skills.find((el) => el.id === parseInt(id));
}

function getAllSkills() {
  return skills;
}

function create(skill) {
  skill.id = Date.now() % 1000000;
  skills.push(skill);
}

function deleteOne(id) {
  const idex = skills.findIndex((el) => el.id === parseInt(id));
  skills.splice(idex, 1);
}
