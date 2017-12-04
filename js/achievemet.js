var SumScoreSprintHse = 0;
var SumScoreSprintTech = 0;
var stuContar = 0;
for (var i = 0; i < data[sede][promo].students.length ; i++) {
  var studentsTotal = data[sede][promo].students.length;
  for (var j = 0; j < data[sede][promo].students[i].sprints.length ; j++) {
    var indicatorHse = 840 * (data[sede][promo].students[i].sprints.length);
    var indicatorTech = 1260 * (data[sede][promo].students[i].sprints.length);
    var stuScoreHse = data[sede][promo].students[i].sprints[j].score.hse;
    var stuScoreTech = data[sede][promo].students[i].sprints[j].score.tech;
    SumScoreSprintHse += stuScoreHse;
    SumScoreSprintTech += stuScoreTech;
  } if (SumScoreSprintHse >= indicatorHse && SumScoreSprintTech >= indicatorTech) {
    stuContar += 1;
  }
  SumScoreSprintHse = 0;
  SumScoreSprintTech = 0;
}
var prctStucontar = ((stuContar / studentsTotal) * 100).toFixed(2);
meta.innerHTML = stuContar;
prctmeta.textContent = prctStucontar + '%';