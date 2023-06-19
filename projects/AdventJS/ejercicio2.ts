function countHours(year, holidays) {
  let horasExtras = 0
    for (let dayMonth of holidays) {
        let monthDay = dayMonth.split('/')
        let month = parseInt(monthDay[0]) - 1
        let day = parseInt(monthDay[1])
        let date = new Date(year, month, day)
        
        if (date.getDay() > 0 && date.getDay() < 6) {
            horasExtras += 2
        }
    }
  
  return horasExtras
}
