import Vue from 'vue';
import Vuetify from 'vuetify';
import light from "./theme";

import "@mdi/font/css/materialdesignicons.css";
import "typeface-source-sans-pro";


Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        options: {
          customProperties: true
        },
        themes: { light }
      }
    });
