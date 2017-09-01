<template lang="pug">
    #app
        lg-button(size="sm", type="main") 测试
        lg-input(v-model="model", @blur="test")
</template>

<script>
    export default {
        data() {
            return {
                model: ''
            }
        },
        methods: {
            test() {
                console.log(1)
            }
        }
    }
</script>
