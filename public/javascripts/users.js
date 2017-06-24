var index = require("./index");
var $ = require("jquery");

   console.log("test user");
   console.log(index);
    var user = function(){
        $.each([1,2],function(i,v){
            console.log(v);
       });

    };
user();

    module.exports = user;


