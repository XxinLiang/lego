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
@import "../../common.scss";

.input {
    display: inline-block;
    height: 30px;
    box-sizing: border-box;
    padding: 0 9px;
    color: #333;
    font-size: 12px;
    border: 1px solid $border;
    transition: all .15s ease;
    outline: none;
    &:focus {
        border-color: $main;
    }
    &:disabled {
        background-color: #f5f5f5;
        color: #b7b7b7;
    }
    &--sm {
        width: 60px;
    }
    &--md {
        width: 120px;
    }
    &--ml {
        width: 160px;
    }
    &--lg {
        width: 260px;
    }
    &--xl {
        width: 380px;
    }
}
</style>
