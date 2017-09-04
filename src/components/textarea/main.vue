<template>
    <textarea
        class="textarea"
        :id="id"
        :disabled="disabled"
        :placeholder="placeholder"
        :style="{
            width: width + 'px',
            height: height + 'px'
        }"
    >
    </textarea>
</template>

<script>
    export default {
        name: 'LgTextarea',
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
            width: {
                type: Number,
                default: 460
            },
            height: {
                type: Number,
                default: 150
            },
            placeholder: String
        }
    }
</script>

<style lang="scss" scoped>
@import "../../common.scss";

.textarea {
    display: inline-block;
    box-sizing: border-box;
    padding: 0 9px;
    font-size: 12px;
    color: #333;
    line-height: 24px;
    border: 1px solid $border;
    transition: all .15s ease;
    resize: none;
    outline: none;
    &:focus {
        border-color: $main;
    }
    &:disabled {
        background-color: #f5f5f5;
        color: #b7b7b7;
    }
}
</style>
