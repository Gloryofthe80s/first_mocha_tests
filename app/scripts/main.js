function Collection (models) {
    this.models = models;
    this.find = function (id) {
        var result;

        if (typeof(id) != 'string') {
            throw new Error('id is not a string!');
        }

        _.each(this.models, function(index, el) {
           if (el.id == id) {
            result = value;
           }
        });

        if (result) {
            return result;
        }
    };

    this.add = function (objectLit) {
        if (typeof(objectLit) != 'object') {
            throw new Error('arg was not an object!');
        }

        if (_.isEmpty(objectLit)) {
            throw new Error('empty object is not a valid arg!');
        }

        if (!objectLit.hasOwnProperty('id')) {
            throw new Error('object has no id!');
        }
        this.models.push(objectLit);
    };

    this.remove = function (idToRemove) {
        if(_.isString(idToRemove) == false) {
            throw new Error('arg not a string!');
        }

        this.models = _.reject(this.models, function(model) {
            return model.id === idToRemove;
        })
    };

    this.empty = function () {
        if (arguments.length > 0) {
            throw new Error('no arguments allowed!');
        }

        if (this.models.length === 0) {
            throw new Error('models array already empty!');
        }

        this.models = [];
    }

    this.random = function (howMany) {
        howMany = howMany || 1;

        if (howMany >= this.models.length) {
            return this.models;
        }

        if (_.isNumber(howMany) == false) {
            throw new Error('only numbers are a valid argument!');
        }

        var result = []
        var randIndex = _.random(0, this.models.length - 1)

        for (var i = 0; i < howMany; i++) {
            result.push(this.models[randIndex])
            randIndex = randIndex; // 're-roll' the random number
            //how to prevent it from grabbing the same index twice?
        }

        return result;
    }

    this.length = function () {
        if (arguments.length > 0) {
            throw new Error('no arguments allowed!');
        }

        return this.models.length;
    }
}









