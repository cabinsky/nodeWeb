<template>
  <div>
      {{text}}
  </div>

</template>

<script>
  define(["Vue"], function(Vue) {
      var test1 = Vue.extend({
          template: template, // the variable template will be injected
          data: function() {
              return {"text": "Ok"};
          }
      });
      return {
        get:function(){
            return test1;
            }
        };
      }
    );
</script>