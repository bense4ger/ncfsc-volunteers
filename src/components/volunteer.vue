<template>
    <div class="volunteer initial" :id="id">
        <div class="volunteer--image" :style="style"></div>
        <div class="volunteer--name">
            <h2>{{volunteerName}}</h2>
        </div>
    </div>
</template>

<script>
    const createBgImage = (path, name) => {
        return `url('${path}/${name.toLowerCase().replace(' ', '-')}.jpg')`
    };
    export default {
        name: 'volunteer',
        props: ['volunteerName', 'baseImagePath', 'index'],
        data() {
            return {
                style: {
                    backgroundImage: createBgImage(this.baseImagePath, this.volunteerName)
                },
                id: `vol-${this.index}`
            }
        }
    }
</script>

<style lang="scss">
    @import '../sass/common.scss';

    div.volunteer {
        width: 100%;
        margin-bottom: 5vh;
        @media (min-width: 1024px) {
            border-right: 5px solid $logo-yellow;
        }

        @for $i from 0 through 11 {
            &#vol-#{$i} {
                opacity: 1;
                @include staggered-revel($i);
            }
        }

        &--image {
            @media (max-width: 1024px) {
                margin: 0 auto;
            }
            width: 20vh;
            height: 20vh;
            overflow: hidden;
            margin-bottom: 2vh;
            border-radius: 50%;
            border: 2px solid $logo-yellow;
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            @include shadow();
        }

        &--name {
            h2 {
                font-size: 2vh;
                color: $logo-yellow;
                font-weight: 700;
                width: 20vh;
                text-align: center;
            }
        }

        &.initial {
            opacity: 0 !important;
        }



    }
</style>