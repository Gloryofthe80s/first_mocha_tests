function Collection (models) {
    this.models = models;
    this.find = function (id) {
        var result;

        if(typeof(id) != 'string') {
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

    this.add = function () {};
    this.remove = function () {};
}
