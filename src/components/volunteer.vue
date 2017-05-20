<template>
    <div class="volunteer" :style="style" :data-index="index">
        <div class="volunteer--image">
            <img :src="`${this.baseImagePath}/${this.volunteerName.toLowerCase().replace(' ', '-')}.jpg`" alt="">
        </div>
        <div class="volunteer--name">
            <h2>{{volunteerName}}</h2>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'volunteer',
        props: ['index', 'volunteerName', 'baseImagePath'],
        data() {
            return {
                style: {
                    'z-index': this.index * -1
                },
                className: `volunteer vol-${this.index}`
            }
        }
    }
</script>

<style lang="scss">
    @import '../sass/common.scss';

    div.volunteer {
        position: absolute;
        width: 10.5vw;
        height: 10.5vw;
        display: block;
        cursor: pointer;
        transform: translateX(44vw) translateY(70vh);

        &.initial {
            transition: all 1500ms cubic-bezier(0.18, 0.89, 0.32, 1.28);
            transform: translateX(5vw) translateY(70vh);

            &.vol-1 {
                transition: all 1500ms cubic-bezier(0.18, 0.89, 0.32, 1.28);
                transform: translateX(10vw) translateY(50vh);
            }

            &.vol-2 {
                transition: all 1500ms cubic-bezier(0.18, 0.89, 0.32, 1.28);
                transform: translateX(15vw) translateY(30vh);
            }

            &.vol-3 {
                transition: all 1500ms cubic-bezier(0.18, 0.89, 0.32, 1.28);
                transform: translateX(20vw) translateY(10vh);
            }
        }

        &--image {
            width: 80%;
            height: 80%;
            margin: 0 auto;

            img {
                width: 100%;
                height: 100%;
                border-radius: 50%;
                border: 0.25vw solid $logo-yellow;
                @include shadow();
            }
        }

        &--name {
            width: 100%;
            opacity: 0;

            h2 {
                font-family: $font;
                font-size: 2vh;
                text-align: center;
            }
        }
    }
</style>