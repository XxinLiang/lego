<template lang="pug">
    #app
        lg-button(size="sm", type="main") 测试
        lg-input(v-model="model")
        lg-switch(:open="open", @click="open = !open")
</template>

<script>
    export default {
        data() {
            return {
                model: '',
                open: false
            }
        },
        methods: {
        }
    }
</script>
