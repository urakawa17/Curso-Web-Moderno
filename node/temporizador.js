const schedule = require("node-schedule")

// const tarefa1 = schedule.scheduleJob('*/5 * 12 * * 1', function(){ //a cada 5 segundos,
// quando dia for 12, nos dias 2 da semana (1 - domingo, 6 - sabado)
const tarefa1 = schedule.scheduleJob("*/5 * * * * *", function () {
  console.log("Executando Tarefa 1!", new Date().getSeconds())
})

setTimeout(function () {
  tarefa1.cancel()
  console.log("Cancelando Tarefa 1!")
}, 15000)

const regra = new schedule.RecurrenceRule()
// regra.dayOfWeek = [new schedule.Range(1,5)]
regra.hour = 16
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function () {
  console.log("Executando Tarefa 2!", new Date().getSeconds())
})
