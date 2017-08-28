import Vue from 'vue'
import App from './App'
import Lego from 'src/index'
import 'normalize.css'

Vue.use(Lego)

/* eslint-disable no-new */
new Vue({
    el: 'body',
    components: {
        App
    }
})
