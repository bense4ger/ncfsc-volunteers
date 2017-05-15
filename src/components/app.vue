<template>
    <div class="app-container">
        <div class="app-container--volunteers">
            <div class="volunteer-wrap" v-for="volunteer in volunteers">
                <volunteer :volunteer-name="volunteer.name" :base-image-path="baseImagePath" v-on:click.native="selectVolunteer(volunteer.name)"></volunteer>
            </div>
        </div>
        <div class="app-container--info">
            <template v-if="selected !== undefined">
                <bio :volunteer-name="selected.name" :bio="selected.bio" v-on:click.native="clearSelection"></bio>
            </template>
            <template v-else>
                <logo></logo>
            </template>
        </div>
    </div>
</template>

<script>
    import Logo from './logo.vue';
    import Bio from './bio.vue';
    import Volunteer from './volunteer.vue';
    import * as _ from 'lodash/collection';

    export default {
        name: 'app',
        data() {
            return {
                volunteers: store.volunteers,
                baseImagePath: store.baseImagePath,
                selected: undefined
            }
        },
        methods: {
            selectVolunteer(name) {
                this.selected = _.find(this.volunteers, (v) => {
                    return v.name === name;
                });
            },
            clearSelection() {
                this.selected = undefined;
            }
        },
        components: {
            volunteer: Volunteer,
            bio: Bio,
            logo: Logo
        }
    }
</script>

<style lang="scss">
    @import '../sass/common';
    body {
        font-family: $font;
        background-color: $logo-green;
        color: $black;
    }

    div.app-container {
        width: 100vw;
        height: 100vh;
        overflow: hidden;

        &--info {
            width: 40vw;
            height: 28vh;
            position: absolute;
            bottom: 2vh;
            left: 30vw;
        }
    }
</style>