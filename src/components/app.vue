<template>
    <div id="content-wrap" class="row">
        <div class="row header">
            <div class="small-12 columns"><h2>Our Volunteers</h2></div>
        </div>
        <template v-for="(volunteer, index) in volunteers">
            <div class="row app-container">
                <div class="small-12 medium-4 columns app-container--volunteers">
                    <volunteer :index="index" :volunteer-name="volunteer.name" :base-image-path="baseImagePath"></volunteer>
                </div>
                <div class="small-12 medium-8 columns app-container--info">
                    <bio :index="index" :bio="volunteer.bio"></bio>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
    import Volunteer from './volunteer.vue';
    import Bio from './bio.vue';

    export default {
        name: 'app',
        data() {
            return {
                volunteers: store.volunteers,
                baseImagePath: store.baseImagePath
            }
        },
        components: {
            volunteer: Volunteer,
            bio: Bio
        }
    }
</script>

<style lang="scss">
    @import '../sass/common';

    body {
        background-color: $logo-green;
        font-family: $font;
    }

    div.header {
        @include small-nudge();

        h2 {
            color: $logo-yellow;
            font-weight: 700;
            text-align: right;
        }
    }

</style>