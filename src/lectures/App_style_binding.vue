<template>
    <div>
        <div :style ="styleObject">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Tempora distinctio ducimus iure amet enim maxime accusamus illo blanditiis facilis accusantium nulla, 
            dicta repellat! Consequuntur illum dicta expedita inventore consequatur minima.
        </div>
        <button @click="fontSize++"> font + </button>
        <button @click="fontSize--"> font - </button>
    </div>
</template>

<script>
import { computed, reactive, ref } from 'vue';

export default {
    setup () {
        // const styleObject = reactive({
        //     color:'red',
        //     fontSize: '13px',
        // });
        const fontSize = ref(13);

        const styleObject = computed(() => {
            return {color:'blue', fontSize: fontSize.value + 'px'};
        });
        return {
            styleObject,
            fontSize
        }
    }
}
</script>

<style lang="scss" scoped>

</style>