function Collection (models) {
    this.models = models;
    this.find = function (id) {
        var result;

        if (typeof(id) != 'string') {
            throw new Error('id is not a string!')
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
            throw new Error('arg was not an object!')
        }

        if (_.isEmpty(objectLit)) {
            throw new Error('empty object is not a valid arg!')
        }

        if (!objectLit.hasOwnProperty('id')) {
            throw new Error('object has no id!')
        }
        this.models.push(objectLit);
    };

    this.remove = function (idToRemove) {
        if(_.isString(idToRemove) == false) {
            throw new Error('arg not a string!')
        }

        this.models = _.reject(this.models, function(model) {
            return model.id === idToRemove;
        })
    };

    this.empty = function () {

    }

    this.random = function () {

    }

    this.length = function () {

    }
}









