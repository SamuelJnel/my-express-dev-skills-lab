const Skill = require("../models/skill");

module.exports = {
  index,
  show,
  new: newSkill,
  create,
  delete: deleteSkill,
  edit,
  update,
};

function update(req, res) {
  Skill.update(req.params.id, req.body);
  res.redirect("/skills");
}

function edit(req, res) {
  res.render("skills/edit", {
    skill: Skill.getOneSkill(req.params.id),
  });
}

function index(req, res) {
  res.render("skills/index", {
    skills: Skill.getAllSkills(),
    skill: req.skillName,
  });
}

function newSkill(req, res) {
  res.render("skills/new");
}

function show(req, res) {
  res.render("skills/show", {
    skill: Skill.getOneSkill(req.params.id),

    skillNum:
      Skill.getAllSkills().findIndex(
        (el) => el.id === parseInt(req.params.id)
      ) + 1,
  });
}

function create(req, res) {
  console.log(req.body);
  Skill.create(req.body);
  res.redirect("/");
}

function deleteSkill(req, res) {
  Skill.deleteOne(req.params.id);
  res.redirect("/");
}
