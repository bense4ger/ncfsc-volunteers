<template>
    <div class="row helpers">
        <div class="small-12 columns">
            <h4>A special thanks to these kind people who also help us out</h4>
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
        h4, p, li {
            color: $white;
        }

        ul {
            list-style: none;
            margin: 0;
            li {

            }
        }
    }
</style>