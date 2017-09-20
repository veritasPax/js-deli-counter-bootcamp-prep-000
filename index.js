var katzDeliLine = []

function takeANumber(currentLine, name) {
  katzDeliLine = [...katzDeliLine, name]
  return `Welcome, ${name}. You are number ${currentLine.length + 1} in line.`
}

function nowServing(currentLine) {
  if (currentLine.length === 0) {
    return "There is nobody waiting to be served!"
  }

  var nowPerson = currentLine.shift()
  return `Currently serving ${nowPerson}.`
}

function currentLine(currentLine){
  var lineString = 'The line is currently: '
  for (var i = i; i < currentLine.length; i++) {
    if (i === currentLine.length - 1) {
      lineString += `${i+1}. ${currentLine[i]}`
    }
    lineString += `${i+1}. ${currentLine[i]}, `
  }

  return lineString
}
