<template>
    <span
        :class="[
            'switch',
            open ? 'switch--open' : ''
        ]"
    >
        <i class="switch__slider"></i>
        <span class="switch__text">{{open ? 'ON' : 'OFF'}}</span>
    </span>
</template>

<script>
    export default {
        name: 'LgSwitch',
        props: {
            open: Boolean
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../common.scss";
    .switch {
        display: inline-block;
        position: relative;
        width: 60px;
        height: 24px;
        box-sizing: border-box;
        padding: 3px;
        border-radius: 11px;
        background-color: #e5e5e5;
        cursor: pointer;
        user-select: none;
        transition: all .5s ease;
        &__slider {
            position: absolute;
            top: 3px;
            left: 3px;
            z-index: 1;
            width: 18px;
            height: 18px;
            border-radius: 50%;
            background-color: #fff;
            transition: all .5s ease;
        }
        &__text {
            position: absolute;
            top: 5px;
            right: 7px;
            font-size: 14px;
            line-height: 14px;
            color: #b7b7b7;
            transition: all .5s ease;
        }
        &--open {
            background-color: $main;
            .switch__slider {
                transform: translate3d(35px, 0, 0);
            }
            .switch__text {
                color: #fff;
                transform: translate3d(-24px, 0, 0);
            }
        }
    }
</style>
