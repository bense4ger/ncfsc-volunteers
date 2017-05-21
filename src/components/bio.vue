<template>
    <div class="volunteer-bio" :id="id">
        <div class="volunteer-bio--text">
            <p>{{bio}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'bio',
        props: ['bio', 'index'],
        data() {
            return {
                id: `vol-bio-${this.index}`
            }
        }
    }
</script>

<style lang="scss">
    @import '../sass/common.scss';

    div.volunteer-bio {
        &--text {
            @include small-nudge();
            p {
                color: $white;
                text-align: justify;
            }
        }
    }
</style>