<template>
    <div>
        <h1>{{ vue_heading }}</h1>
        <p>
            {{ vue_paragraph }}
        </p>
        <img v-bind:src="vue_image" class="logo"/>
    </div>
</template>

<script>
    export default {
        name: 'VueApp',
        data() {
            return {
                vue_heading: 'This is a Vue Component',
                vue_paragraph: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
                vue_image: 'img/vue.png'
            }
        }
    }
</script>

<style lang="sass" scoped>
    h1 {
        &:after {
            content: '!';
        }
    }
</style>