<template>
    <div class="volunteer-bio">
        <div class="volunteer-bio--header">
            <h3>{{volunteerName}}</h3>
            <span><i class="fa fa-times" aria-hidden="true"></i></span>
        </div>
        <div class="volunteer-bio--text">
            <p>{{bio}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'bio',
        props: ['volunteerName', 'bio']
    }
</script>

<style lang="scss">
    @import '../sass/common';

    div.volunteer-bio {
        width: 40vw;
        min-height: 25vh;
        background-color: $white;
        display: block;
        border: 0.25vh solid $black;
        @include shadow();
        border-radius: 0.25vh;

        &--header {
            width: 95%;
            margin: 0 auto;
            display: block;
            height: 2.5vh;
            margin-bottom: 0.25vh;
            margin-top: 1vh;

            h3 {
                font-size: 2vh;
                width: 30vw;
                float: left;
                display: block;
                margin: 0;
            }

            span {
                cursor: pointer;
                width: 5vw;
                float: right;
                display: block;

                i {
                    float: right;
                }
            }
        }

        &--text {
            width: 95%;
            text-align: justify;
            margin: 0 auto;
        }
    }
</style>