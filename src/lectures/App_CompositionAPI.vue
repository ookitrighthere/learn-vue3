// 루트 컴포넌트
<template>
  <h2>반응형 메시지</h2>
  <p>{{ reactiveMessage }}</p>
  <button v-on:click = "addReactiveMessage"> Add Message </button>

  <h2>일반 메시지</h2>
  <p>{{ normalMessage }}</p>
  <button v-on:click = "addNormalMessage"> Add Message </button>
  
</template>

<script>
import {ref, onBeforeMount, onMounted, isRef} from 'vue';

export default {
  setup() {
    console.log('setUp()')
    const reactiveMessage = ref('Hello Reactive Message');
    const addReactiveMessage = () => {
      reactiveMessage.value = reactiveMessage.value + '!';
    };
    console.log('isRef(reactiveMessage) ?',isRef(reactiveMessage));

    let normalMessage = 'Hello Normal Message';
    const addNormalMessage = () => {
      normalMessage.value = normalMessage.value + '!!';
    };
    console.log('isRef(normarMessage) ? ', isRef(normalMessage));

    onMounted(() => {
      console.log('onMounted');
    });
    onBeforeMount(() => {
      console.log('onBeforeMount');
    });
 


    return {
      reactiveMessage,
      normalMessage,
      addReactiveMessage,
      addNormalMessage,
    };
  }

}
</script>



<style scoped>

</style>
