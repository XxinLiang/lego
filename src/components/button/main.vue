<template>
    <button class="btn" :disabled="disabled" :class="[
                type ? 'btn--' + type : '',
                size ? 'btn--' + size : '',
                {
                    'btn--disabled': disabled
                }
            ]">
        <span>
            <slot></slot>
        </span>
    </button>
</template>

<script>
    export default {
        name: 'LgButton',
        props: {
            type: {
                type: String,
                default: 'default'
            },
            size: String,
            disabled: Boolean
        }
    }
</script>

<style lang="scss" scoped>
    @import "./main.scss";
</style>