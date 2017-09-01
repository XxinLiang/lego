import Button from 'c/button/index'
import Input from 'c/input/index'
import Switch from 'c/switch/index'

const components = [
    Button,
    Input,
    Switch
]

function install(Vue) {
    if (install.installed) return
    components.map(component => Vue.component(component.name, component))
}

export default {
    install,
    Button,
    Input,
    Switch
}
