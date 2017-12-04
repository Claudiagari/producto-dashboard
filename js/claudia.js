var Aqp20162 = data.AQP['2016-2'];
var Aqp20171 = data.AQP['2017-1'];
var Lim20162 = data.LIM['2016-2'];
var Lim20171 = data.LIM['2017-1'];
var Lim20172 = data.LIM['2017-2'];
var Cmdx20171 = data.CDMX['2017-1'];
var Cmdx20172 = data.CDMX['2017-2'];
var Scl20162 = data.SCL['2016-2'];
var Scl20171 = data.SCL['2017-1'];
var Scl20172 = data.SCL['2017-2'];

function students(e) {
  var studentsUP = 0;
  var studentsDown = 0; 
  for (var i = 0; i < e.students.length ; i++) {
    var studentsTotal = e.students[i].active;
    if (studentsTotal === true) {
      studentsUP += 1;
    } else if (studentsTotal === false) {
      studentsDown += 1;
    }
  }
  studentsUP;
  studentsDown;
  var totalstudents = studentsUP + studentsDown;
  var prctDetractors = ((studentsDown / totalstudents) * 100).toFixed(2);
  return array = [totalstudents, prctDetractors];
}
var [totalstudentsAqp20162, detractorsAqp20162] = students(Aqp20162);
var [totalstudentsAqp20171, detractorsAqp20171] = students(Aqp20171);
var [totalstudentsLim20162, detractorsLim20162] = students(Lim20162);
var [totalstudentsLim20171, detractorsLim20171] = students(Lim20171);
var [totalstudentsLim20172, detractorsLim20172] = students(Lim20172);
var [totalstudentsScl20162, detractorsScl20162] = students(Scl20162);
var [totalstudentsScl20171, detractorsScl20171] = students(Scl20171);
var [totalstudentsScl20172, detractorsScl20172] = students(Scl20172);
var [totalstudentsCmdx20171, detractorsCmdx20171] = students(Cmdx20171);
var [totalstudentsCmdx20172, detractorsCmdx20172] = students(Cmdx20172);

function achievemet(e) {
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
}


function sprintTech(e) {
  var sprintTech1 = 0;
  var sprintTech2 = 0;
  var sprintTech3 = 0;
  var sprintTech4 = 0;
  for (var i = 0; i < e.students.length ; i++) {
    var totalStudents = e.students.length;
    for (var j = 0; j < e.students[i].sprints.length ; j++) {
      var stuScoreTech = e.students[i].sprints[j].score.tech;
      var sprintNumber = e.students[i].sprints[j].number;
      if (sprintNumber == 1 && stuScoreTech >= 1260) {
        sprintTech1 += 1;
      } else if (sprintNumber == 2 && stuScoreTech >= 1260) {
        sprintTech2 += 1;
      } else if (sprintNumber == 3 && stuScoreTech >= 1260) {
        sprintTech3 += 1;
      } else if (sprintNumber == 4 && stuScoreTech >= 1260) {
        sprintTech4 += 1;
      }
    }
  }
  array = [sprintTech1, sprintTech2, sprintTech3, sprintTech4];
  newArray = [];
  for (var k = 0; k < array.length ; k++) {
    if (array[k] !== 0) {
      newArray.push(array[k]);
    }
  }
  prctNewarray = []; 
  for (var l = 0; l < newArray.length ; l++) {
    prctNewarray.push((newArray[l] / totalStudents * 100).toFixed(2));
  }
  return total = [prctNewarray, newArray];
}
console.log(sprintTech(Lim20171));


var totalNpsSprint = 0;
for (var i = 0; i < data[sede][promo].ratings.length ; i++) {
  var raitingspNpsromoters = data[sede][promo].ratings[i].nps.promoters;
  var raitingspNpsDetractors = data[sede][promo].ratings[i].nps.detractors;
  var NpsSprint = raitingspNpsromoters - raitingspNpsDetractors;
  totalNpsSprint += NpsSprint;
}
var prctTotalNpsSprint = totalNpsSprint / data[sede][promo].ratings.length;

console.log(data.SCL['2017-2'].ratings.length);