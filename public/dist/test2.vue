<template>
  <div>
      {{text}}
  </div>

</template>

<script>
  define(["Vue"], function(Vue) {
      Vue.component("test2-component", {
          template: template, // the variable template will be injected
          data: function() {
              return {"text": "test2"};
          }
      });
    });
</script>