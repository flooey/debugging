var filter = require('./filter');

var bulbasaur = {
	"name": "Bulbasaur",
	"type": "grass",
	"number": 1
}

var ivysaur = {
	"name": "Ivysaur",
	"type": "grass",
	"number": 2
}

var venusaur = {
	"name": "Venusaur",
	"type": "grass",
	"number": 3
}

var charmander = {
	"name": "Charmander",
	"type": "fire",
	"number": 4
}

var charmeleon = {
	"name": "Charmeleon",
	"type": "fire",
	"number": 5
}

var charizard = {
	"name": "Charizard",
	"type": "fire",
	"number": 6
}

test('Empty input', function() {
	expect(filter("name:char", [])).toEqual([])
});

test('One item, matches', function() {
	expect(filter("name:char", [charizard])).toEqual([charizard])
})

test('One item, mismatch', function() {
	expect(filter("name:char", [bulbasaur])).toEqual([])
})

test('Two items, one matches', function() {
	expect(filter("name:char", [charizard, bulbasaur])).toEqual([charizard])
})

test('Two items, both match', function() {
	expect(filter("name:char", [charizard, charmeleon])).toEqual([charizard, charmeleon])
})

test('Two filters, both match', function() {
	expect(filter("name:char type:fire", [charizard, charmeleon])).toEqual([charizard, charmeleon])
})

test('Two filters, one matches', function() {
	expect(filter("name:char type:grass", [charizard, charmeleon])).toEqual([])
})

test('Two filters, one matches each', function() {
	expect(filter("name:char type:grass", [charizard, bulbasaur])).toEqual([])
})

test('Number filter', function() {
	expect(filter("number:5", [charizard, charmeleon])).toEqual([charmeleon])
})
