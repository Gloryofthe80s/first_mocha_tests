// Collections spec

// should make a new instance of a collection
students = new Collection();


// if given an array, it should store array
// in a property called "models"
var quarterOne2014 = [
  {
    name: 'Bower',
    id: '1'
  },
  {
    name: 'Jack',
    id: '2'
  }
]
students = new Collection(quarterOne2014)
// so this would return
{
  models: [{name: 'Bower', id: '1'},{name: 'Jack', id:'2'}]
}


// a Collection has a .find() method that searches by ID
students.find('1') // should return {name: 'Bower', id: '1'}

// 1) expect .find() accepts a single arg (string) expect.to.be(String)
// 2) expect .find() returns a single object that has the id prop
// 3) expect .find() won't work unless the string matches an id number in the models array
// 4) expect .find()

// -------

// a Collection has an .add() method that takes an object literal,
// and adds it to the models array
students.add({name: 'jimmy', id:'3'})

// 1) expect .add() to only accept an object literal as its only arg
// 2) expect .add()
// 3) expect .add()
// 4) expect .add()

//  ------

// a Collection has a .remove() method that takes an id,
// and removes it from the models array
students.remove('3')

// 1) expect .remove()
// 2) expect .remove()
// 3) expect .remove()
// 4) expect .remove()























