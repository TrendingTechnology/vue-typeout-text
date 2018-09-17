import TypeoutTextComponent from "./components/TypeoutTextComponent.vue"

export default {
    install(Vue, options) {
        Vue.component('typeout-text', TypeoutTextComponent)
    }
}