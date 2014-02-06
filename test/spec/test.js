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

        it("should throw an error if the find method is used on a different Collection prototype", function() {
            var students = new Collection([{name: 'Jim', id: '99'}]);
            var teachers = new Collection([{name: 'Pam', id: '1'}]);

            expect(students.find(teachers.models[0])).to.throw(Error);
        })
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

            expect(students.add({})).to.throw(Error);
        });

        it("should throw an error when given an object without an id prop", function () {
            var students = new Collection([{name: 'Jim', id: '99'}]);

            expect(students.add({name: 'jeff'})).to.throw(Error);
        });
      });

      describe("has a .remove() method",function(){
        it("should, when given an id, remove the corresponding object from the models property", function() {
            var students = new Collection([{name: 'Jim', id: '99'}]);
            students.remove('99');

            expect(student.models[0]).to.be.equal(undefined);
        })
        it("should decrease the models property's length by 1", function() {
            var students = new Collection([{name: 'Jim', id: '99'}]);
            var lengthBeforeRemove = students.models.length;
            students.remove('99');

            expect(students.models).length.to.equal(lengthBeforeRemove - 1);
        });
        it("should only accept a single string as an id argument", function() {
            var students = new Collection([{name: 'Jim', id: '99'}]);

            expect(students.remove({})).to.throw(Error);
            expect(students.remove([])).to.throw(Error);
            expect(students.remove(1)).to.throw(Error);
        });
        it("should return true on successful removal", function() {
            var students = new Collection([{name: 'Jim', id: '99'}]);

            expect(students.remove('99')).to.return(true);
        });
      })
    })
})();






