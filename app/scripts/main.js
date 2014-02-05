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



// function Collection (models) {
//   this.models = models || [];

//   this.find = function(id) {
//     var result;

//     if (typeof(id) != 'string') {
//       throw new Error("Whoops!");
//     }

//     this.models.forEach(function(value, index){
//       if (value.id == id) {
//         result = value;
//       }
//     });

//     if (result) {
//       return result;
//     }
//   }
// }





// 4 expects per method in the spec, all tests should be passing
// delete the git folder in this existing
// specs first, then make them pass by actually writing out the code in main.js

//rm -rf .git to kill the xisting repo and git init your own