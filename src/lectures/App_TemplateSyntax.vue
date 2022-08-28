<template>
    <h2>텍스트 보간법</h2>
    <p>{{message}}</p>
    <p v-once>{{message}}</p>
    <button @click="message = message + '!'">Click!!! </button>
    <hr>

    <h2>HTML</h2>
    <p>{{htmlMessage}}</p>
    <p v-html="htmlMessage"></p>
    <hr>

    <h2>속성 바인딩</h2>
    <div v-bind:title = "dynamicTitle">마우스를 올려보세요 </div><br>

    <input type = "text" value="wook" :disabled="isInputDisabled"/>
    <button @click="disabledChange">disabled</button><br>

    <input v-bind="attrs"/>
    <input v-bind="attrs"/>
    <input v-bind="attrs"/>

    <hr>

    <h2>JavaScript></h2>
    <div>{{ message.replace(" ","") }} </div>
    <div>{{ message.split('').reverse().join('') }} </div>
</template>

<script>
import {ref} from 'vue';

export default { 
    setup() {
        const message = ref('hello vue3');
        const htmlMessage = ref('<h1><strong>템플릿 문법 </strong></h1>');

        const dynamicTitle = ref('타이틀입니다.');
        const isInputDisabled  = ref(true);
        const disabledChange = () => {
            isInputDisabled.value = !(isInputDisabled.value);
        };
        const attrs = ref({
            type : "text",
            placeholder : "바인딩 테스트",
            disabled : false,
        });

        return{
            message,
            htmlMessage,
            dynamicTitle,
            isInputDisabled,
            disabledChange,
            attrs,
        };
    },
};

</script>

<style></style>