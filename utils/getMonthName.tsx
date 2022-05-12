export const getMonthName = (date:any):object => {
  const splitDate = date.split('-').map((num: string) => Number(num))
    const day = splitDate[2]
    const month = splitDate[1] - 1
    const year = splitDate[0]
    const newDate = new Date(year, month, day) // 2009-11-10
    const monthName = newDate.toLocaleString('default', { month: 'long' })
    return {day,monthName, year}
}
