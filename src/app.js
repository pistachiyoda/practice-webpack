var Vue = require("vue");

Vue.component("componenta", require("./componenta.vue").default);
Vue.component("componentb", require("./componentb.vue").default);

var app = new Vue({
  el: "#wrapper"
});
