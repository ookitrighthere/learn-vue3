<template>
    <div>
        <p>{{message}}</p>
        <button @click="addMessage">click</button>

        <p>{{refMessage}}</p>
        <button @click="addRefMessage">click</button>
    </div>
</template>

<script>
import { ref,reactive } from 'vue';
export default {
    setup () {
        let message = reactive('Hello Vue!');
        const addMessage = () => {
            message = message + '!';
        }
        let refMessage = ref('ref Message');
        const addRefMessage = () => {
            refMessage.value = refMessage.value + '!!';
        }

        return {
            message,
            addMessage,
            refMessage,
            addRefMessage,
        };
    }
}
</script>

<style lang="scss" scoped>

</style>