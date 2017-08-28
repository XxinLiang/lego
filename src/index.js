import Button from 'c/button/index'

const components = [
    Button
]

function install(Vue) {
    if (install.installed) return
    components.map(component => Vue.component(component.name, component))
}

export default {
    install,
    Button
}
