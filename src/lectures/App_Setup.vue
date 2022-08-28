<template>
<h1>{{counter}}</h1>
<h1>{{message}}</h1>
<button v-on:click="increment">counter 증가</button><br>
<button v-on:click="decrement">counter 감소</button>

</template>

<script>
import {ref} from 'vue';

export default {
    setup() {
        const counter = ref(0);
        const message = ref('hello vue3');
        const increment = () => {
            counter.value++;
        }
        const decrement = () => {
            counter.value--;
        }
        return{
            counter,
            message,
            increment,
            decrement,
        };
    },
    mounted() {
        console.log(this.counter);
    }    
};
</script>

<style>
</style>