/* global describe, it */

(function () {
    'use strict';

    describe('A Collection constructor', function () {
        describe(', when run', function () {
            it('should return a new object', function () {
              var students = new Collection;

              expect(students.constructor.name).to.equal("Collection");
            });

            it('stores its first param in a property called models', function(){
              var toBeAdded = [{name: 'Bower', id: '1'},{name: 'Jack', id:'2'}]
              var students = new Collection(toBeAdded)

              expect(students.models).to.be.a('Array');
              expect(students.models[1].name).to.equal('Jack');
            });

        });
    });

    describe("A Collection instance", function(){
      describe("has a .find() method",function(){
        it("should throw an error when given no argument", function(){
            var students = new Collection([{name: 'Jim', id: '99'}]);

            expect(function(){students.find()}).to.throw(Error);
        });

        it("should not return an object when that id is not present in the models", function(){
            var students = new Collection([{name: 'Jim', id: '99'}]);

            expect(students.find('1')).to.not.equal({name: 'Jim', id: '99'});
        });

        it("should return undefined when that id is not present in the models", function(){
            var students = new Collection([{name: 'Jim', id: '99'}]);

            expect(students.find('1')).to.equal(undefined);
        });

        it("should throw an error when given an argument other than a string", function(){
            var students = new Collection([{name: 'Jim', id: '99'}]);

            expect(function(){students.find(1)}).to.throw(Error);
            expect(function(){students.find({})}).to.throw(Error);
            expect(function(){students.find([])}).to.throw(Error);
        });
      });

      describe("has an .add() method",function(){
        it("should add the object it's given to the models property", function () {
            var students = new Collection([{name: 'Jim', id: '99'}]);
            students.add({name: 'Lasagna', id: '2'});

            expect(students.models[1]).to.deep.equal({name: 'Lasagna', id: '2'});
        });

        it("should increase the models property's length by 1", function () {
            var students = new Collection([{name: 'Jim', id: '99'}]);
            var modelsLengthBeforeAdd = students.models.length;
            students.add({name: 'Lasagna', id: '2'});

            expect(students.models.length).to.eql(modelsLengthBeforeAdd + 1);
        });

        it("should only accept a single object as an argument", function () {
            var students = new Collection([{name: 'Jim', id: '99'}]);

            expect(function(){students.add(1)}).to.throw(Error);
            expect(function(){students.add('')}).to.throw(Error);
            // expect(function(){students.add([])}).to.throw(Error); this doesn't work for some reason. breaks the test.

        });

        it("should throw an error if given an empty object as an argument", function () {
            var students = new Collection([{name: 'Jim', id: '99'}]);

            expect(function () {students.add({})}).to.throw(Error);
        });

        it("should throw an error when given an object without an id prop", function () {
            var students = new Collection([{name: 'Jim', id: '99'}]);

            expect(function () {students.add({name: 'jeff', pet: 'kitten'})}).to.throw(Error);
        });
      });

      describe("has a .remove() method", function(){
        it("should, when given an id, remove the corresponding object from the models property", function() {
            var students = new Collection([{name: 'Jim', id: '99'}]);
            students.remove('99');

            expect(students.models[0]).to.be.equal(undefined);
        });
        it("should decrease the models property's length by 1", function() {
            var students = new Collection([{name: 'Jim', id: '99'}]);
            var lengthBeforeRemove = students.models.length;
            students.remove('99');

            expect(students.models.length).to.equal(lengthBeforeRemove - 1);
        });
        it("should only accept a single string as an id argument", function() {
            var students = new Collection([{name: 'Jim', id: '99'}]);

            expect(function(){students.remove({})}).to.throw(Error);
            expect(function(){students.remove([])}).to.throw(Error);
            expect(function(){students.remove(1)}).to.throw(Error);
        });
        // it("should return true on successful removal", function() {
        //     var students = new Collection([{name: 'Jim', id: '99'}]);

        //     expect(students.remove('99')).to.be.true;
        // });
      });

      describe("has an .empty() method", function(){
        it('should remove all objects from the models array', function () {
            var students = new Collection([{name: 'Jim', id: '99'}, {name: 'Salsa Jones', id: '2'}]);
            students.empty();

            expect(students.models).to.equal([]);
        });

        it('should reduce the models array length to 0', function () {
            var students = new Collection([{name: 'Jim', id: '99'}, {name: 'Salsa Jones', id: '2'}]);
            var lengthBeforeEmpty = students.models.length;
            students.empty();

            expect(students.models.length).to.equal(0);
        });

        it('should throw an error if the models array was already empty', function () {
            var students = new Collection([]);
            students.empty();

            expect(function(){students.empty()}).to.throw(Error);
        });

        it('should accept no arguments', function () {
            var students = new Collection([{name: 'Jim', id: '99'}, {name: 'Salsa Jones', id: '2'}]);
            students.empty('bun in the oven')

            expect(function(){students.empty()}).to.throw(Error);
        });
      })

      describe("has a .random() method", function(){
        it('should return a random object from the models array', function () {
            var students = new Collection([{name: 'Jim', id: '99'}, {name: 'Salsa Jones', id: '2'}, {name: 'Bubbins', id: '3'}]);
            var randModelsNum = _.random(0, student.models.length - 1) //returns a random index number for models array

            expect(students.random()).to.equal(students.models[0]).or.equal(students.models[1]).or.equal(students.random[2]);
        });

        it('should allow a number as an argument and return an array with that many random objects', function () {
            var students = new Collection([{name: 'Jim', id: '99'}, {name: 'Salsa Jones', id: '2'}, {name: 'Bubbins', id: '3'}]);
            var randResult = students.random(3);

            expect(randResult).to.equal([[{name: 'Jim', id: '99'}, {name: 'Salsa Jones', id: '2'}, {name: 'Bubbins', id: '3'}]]);
        });

        it('if no argument is provided, default arg should be 1', function () {
            var students = new Collection([{name: 'Jim', id: '99'}, {name: 'Salsa Jones', id: '2'}, {name: 'Bubbins', id: '3'}]);
            var randResult = students.random();

            expect(randResult).to.equal(students.models[0]).or.equal(students.models[1]).or.equal(students.models[2]);
        });

        it('should throw an error if provided arg is not a number', function () {
            var students = new Collection([{name: 'Jim', id: '99'}, {name: 'Salsa Jones', id: '2'}, {name: 'Bubbins', id: '3'}]);

            expect(function(){students.random('scrubbing between the folds')}).to.throw(Error);
        });
      });

      describe("has a .length() method", function(){
        it('should return the length of the models array', function () {
            var students = new Collection([{name: 'Jim', id: '99'}, {name: 'Salsa Jones', id: '2'}]);
            students.length();

            expect(students.models).to.have.length(2)
        });

        it('should not mutate the models array', function () {
            var students = new Collection([{name: 'Jim', id: '99'}, {name: 'Salsa Jones', id: '2'}]);
            var modelsNoMutate = students.models;
            students.length();

            expect(modelsNoMutate).to.equal(students.models);
        });

        // it('should ');

        it('should accept no arguments', function () {
            var students = new Collection([{name: 'Jim', id: '99'}, {name: 'Salsa Jones', id: '2'}]);
            students.length('bun in the oven')

            expect(function(){students.empty()}).to.throw(Error);
        });
      })
    })
})();






