// para el cuadro de achievement
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
stuContar, prctStucontar;

// para el cuadro de nps
var totalNpsSprint = 0;
var sprintRaitings = data[sede][promo].ratings.length;
for (var i = 0; i < data[sede][promo].ratings.length ; i++) {
  var raitingspNpsromoters = data[sede][promo].ratings[i].nps.promoters;
  var raitingspNpsDetractors = data[sede][promo].ratings[i].nps.detractors;
  var NpsSprint = raitingspNpsromoters - raitingspNpsDetractors;
  totalNpsSprint += NpsSprint;
}
var prctTotalNpsSprint = (totalNpsSprint / sprintRaitings).toFixed(2);

// para los porcentajes promoters - pasive y detractors
// Promoters
var totalPromoters = 0;
for (var i = 0; i < data[sede][promo].ratings.length ; i++) {
  var raitingspNpsromoters = data[sede][promo].ratings[i].nps.promoters;
  totalPromoters += raitingspNpsromoters;
}
var npsTotalPromoters = (totalPromoters / sprintRaitings).toFixed(2);
// Pasive
var totalPasive = 0;
for (var i = 0; i < data[sede][promo].ratings.length ; i++) {
  var raitingspNpsromoters = data[sede][promo].ratings[i].nps.passive;
  totalPasive += raitingspNpsromoters;
}
npsTotalPasive = (totalPasive / sprintRaitings).toFixed(2);
// Detractors
var totalDetractors = 0;
for (var i = 0; i < data[sede][promo].ratings.length ; i++) {
  var raitingspNpsromoters = data[sede][promo].ratings[i].nps.detractors;
  totalDetractors += raitingspNpsromoters;
}
var npsTotalDetractorsScl20172 = (totalDetractors / sprintRaitings).toFixed(2);


