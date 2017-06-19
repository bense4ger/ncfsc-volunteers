<template>
    <div class="row helpers">
        <div class="small-12 columns">
            <p>Plus we have these kind people who also help us out</p>
            <ul>
                <li v-for="helper in helpers">
                    {{ helper }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'helpers',
        data() {
            return {
                helpers: store.helpers
            };
        }
    }
</script>

<style lang="scss">
    @import '../sass/common.scss';
    div.helpers {
        li {
            color: $white;
        }

        p {
            color: $logo-yellow;
            font-weight: 500;
        }

        ul {
            list-style: none;
            margin: 0;            
        }
    }
</style>