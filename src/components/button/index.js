import Button from './main.vue'

Button.install = Vue => {
    Vue.component(Button.name, Button)
}

export default Button
