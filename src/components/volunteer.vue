<template>
    <div class="volunteer">
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
        props: ['volunteerName', 'baseImagePath']
    }
</script>

<style lang="scss">
    @import '../sass/common.scss';

    div.volunteer {
        width: 10.5vw;
        height: 10.5vw;
        display: block;
        cursor: pointer;

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

            h2 {
                font-family: $font;
                font-size: 2vh;
                text-align: center;
            }
        }
    }
</style>