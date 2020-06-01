const { readFileSync, writeFileSync } = require('fs')
const parse = require('csv-parse/lib/sync')
const toCSV = require('convert-array-to-csv').convertArrayToCSV

const file = readFileSync('./download 2.csv')
let data = parse(file)
data.shift()

let reorganised = [
  [
    'Year',
    'Animal Products',
    'Vegetable Products',
    'Animal and Vegetable Bi-Products',
    'Foodstuffs',
    'Mineral Products',
    'Chemical Products',
    'Plastics and Rubbers',
    'Animal Hides',
    'Wood Products',
    'Paper Goods',
    'Textiles',
    'Footwear and Headwear',
    'Stone And Glass',
    'Precious Metals',
    'Metals',
    'Machines',
    'Transportation',
    'Instruments',
    'Weapons',
    'Miscellaneous',
    'Arts and Antiques',
  ],
]

let currentYear = 0
let yearRow = []

data.forEach(element => {
  if (Number(element[0]) != currentYear) {
    if (yearRow.length != 0) reorganised.push(yearRow)
    
    currentYear = Number(element[0])
    yearRow = []
    yearRow.push(element[0])
  }

  yearRow.push(element[3])
})

console.log(reorganised)

writeFileSync('done.csv', toCSV(reorganised))
