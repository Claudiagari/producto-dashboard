/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
// Viendo la data en la consola
console.log(data)
console.log(data.AQP)
console.log(data.AQP['2016-2']);
console.log(data.AQP['2016-2'].students);
console.log(data.AQP['2016-2'].students[0]);
console.log(data.AQP['2016-2'].students[0].active);
console.log(data.AQP['2016-2'].students[0].sprints[0])
console.log(data.AQP['2016-2'].students[0].sprints[0].score.tech)
// Total de estudiantes 
//El total de estudiantes presentes por sede y generación.
//El porcentaje de deserción de estudiantes.
var studentsAqpUP= 0
var studentsAqpDown= 0

for (var i = 0; i < data.AQP['2016-2'].students.length ; i++ ){
    var studentsTotal = data.AQP['2016-2'].students[i].active 
    if (studentsTotal == true){
        studentsAqpUP += 1
    } else if (studentsTotal == false){
        studentsAqpDown +=1
    }
}
console.log(studentsAqpUP)
console.log(studentsAqpDown)

// obteniendo score mayor 70%
//La cantidad de estudiantes que superan la meta de puntos en promedio de todos los sprints cursados. La meta de puntos es 70% del total de puntos en HSE y en tech.
var stuContar = 0
var totalScoreSprint =0
    for (var i = 0; i < data.AQP['2016-2'].students.length ; i++ ){
        for (var j = 0; j < data.AQP['2016-2'].students[i].sprints.length ; j++ ){
                var stuScoreHSE=data.AQP['2016-2'].students[i].sprints[j].score.hse
                var stuScoreTECH=data.AQP['2016-2'].students[i].sprints[j].score.tech
                var SumScoreSprint= stuScoreHSE+stuScoreTECH
                totalScoreSprint += SumScoreSprint
                if (totalScoreSprint>=8400) {
                stuContar += 1 }
        }
             totalScoreSprint =0
    }
    
console.log(stuContar)
//El Net Promoter Score (NPS) promedio de los sprints cursados. El NPS se calcula en base a la encuesta que las estudiantes responden al respecto de la recomendación que darían de Laboratoria, bajo la siguiente fórmula:

var totalNpsSprint = 0
for (var i = 0; i < data.AQP['2016-2'].ratings.length ; i++ ){
            var raitingspNpsromoters=data.AQP['2016-2'].ratings[i].nps.promoters
            var raitingspNpsDetractors=data.AQP['2016-2'].ratings[i].nps.detractors
            var NpsSprint=raitingspNpsromoters-raitingspNpsDetractors
            totalNpsSprint += NpsSprint
        }
console.log(totalNpsSprint/4)
// para los porcentajes promoters - pasive y detractors  
var totalPromotersAQP = 0
for (var i = 0; i < data.AQP['2016-2'].ratings.length ; i++ ){
    var raitingspNpsromoters=data.AQP['2016-2'].ratings[i].nps.promoters
    totalPromotersAQP += raitingspNpsromoters
}
console.log(totalPromotersAQP/4)

var totalPasiveAQP = 0
for (var i = 0; i < data.AQP['2016-2'].ratings.length ; i++ ){
    var raitingspNpsromoters=data.AQP['2016-2'].ratings[i].nps.passive
    totalPasiveAQP += raitingspNpsromoters
}
console.log(totalPasiveAQP/4)

var totalDetractorsAQP = 0
for (var i = 0; i < data.AQP['2016-2'].ratings.length ; i++ ){
    var raitingspNpsromoters=data.AQP['2016-2'].ratings[i].nps.detractors
    totalDetractorsAQP += raitingspNpsromoters
}
console.log(totalDetractorsAQP/4)

//La cantidad y el porcentaje que representa el total de estudiantes que superan la meta de puntos técnicos en promedio y por sprint.

for (var i = 0; i < data.AQP['2016-2'].students.length ; i++ ){
    for (var j = 0; j < data.AQP['2016-2'].students[i].sprints.length ; j++ ){
            var stuScoreTech=data.AQP['2016-2'].students[i].sprints[j].score.tech
           console.log(stuScoreTech)
    }}
