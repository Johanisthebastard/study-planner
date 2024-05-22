function splitTodosIntoDays(todos) {
	const mo = todos.filter((t) => t.day === "mo");
	const ti = todos.filter((t) => t.day === "ti");
	const on = todos.filter((t) => t.day === "on");
	const to = todos.filter((t) => t.day === "to");
	const fr = todos.filter((t) => t.day === "fr");
	const lö = todos.filter((t) => t.day === "lö");
	const sö = todos.filter((t) => t.day === "sö");
  
	return [mo, ti, on, to, fr, lö, sö];
  }

// Tips! Du kan få användning för funktioner som:
// + kopierar en lista och byter plats på två element (snooze)
// + lägger till ett element på en viss plats i en lista
// https://www.w3schools.com/jsref/jsref_splice.asp
// https://www.freecodecamp.org/news/javascript-splice-how-to-use-the-splice-js-array-method/

export { splitTodosIntoDays }
