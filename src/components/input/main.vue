<template>
    <input
        :type="type"
        :id="id"
        :class="[
            'input',
            size ? 'input--' + size : ''
        ]"
        :disabled="disabled"
        :placeholder="placeholder"
    />
</template>

<script>
export default {
    name: 'LgInput',
    props: {
        type: {
            type: String,
            default: 'text'
        },
        size: {
            type: String,
            default: 'lg'
        },
        id: String,
        disabled: Boolean,
        width: String,
        height: String,
        placeholder: String
    }
}
</script>

<style lang="scss" scoped>
@import "./main.scss";
</style>
