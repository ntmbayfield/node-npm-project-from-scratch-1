var main = {};

main.colors = [ 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet' ]


main.randomColor = colorOptions => {
  const randomIndex = Math.floor(Math.random() * colorOptions.length)

  return colorOptions[randomIndex]
}

// Export both `colors` and `randomColor`
module.exports = {
  colors: main.colors,
  randomColor: main.randomColor
}
