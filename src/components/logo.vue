<template>
    <div id="ncfsc-logo">
        <img :src="`${baseImagePath}/logo.jpg`" alt="NCFSC Logo">
    </div>
</template>

<script>
    export default {
        name: 'logo',
        data() {
            return {
                baseImagePath: store.baseImagePath
            }
        }
    }
</script>

<style lang="scss">
    @import '../sass/common.scss';

    div#ncfsc-logo {
        width: 15vw;
        margin: 0 auto;
        img {
            @include shadow();
            border-radius: 0.25vh;
            width: 15vw;
        }
    }
</style>