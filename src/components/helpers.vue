<template>
    <div class="row helpers">
        <div class="small-12 columns">
            <h5>A special thanks to these kind people who also help us out</h5>
            <ul>
                <li v-for="helper in helpers">
                    {{ helper }}
                </li>
            </ul>
            <p>and not forgetting the lovely staff from the Community Sports Foundation</p>
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
        p, li {
            color: $white;
        }

        h5 {
            color: $logo-yellow;
            font-weight: 500;
        }

        ul {
            list-style: none;
            margin: 0;
            li {

            }
        }
    }
</style>