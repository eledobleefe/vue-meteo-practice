import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#009688",
        secondary: "#004A43",
        accent: "#607d8b",
        error: "#f44336",
        warning: "#ff5722",
        info: "#00bcd4",
        success: "#8bc34a",
      },
      dark: {
        primary: "#009688",
        secondary: "#ffc107",
        accent: "#607d8b",
        error: "#f44336",
        warning: "#ff5722",
        info: "#00bcd4",
        success: "#8bc34a",
      },
    },
  },
});
