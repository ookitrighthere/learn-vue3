<template>
    <div>
        <p>author : {{author}}</p>
        <p>title : {{title}}</p>
        <p>description : {{description}}</p>
    </div>
</template>

<script>
import {reactive, toRefs, toRef} from 'vue';
export default {
    setup () {
        const book = reactive({
        author: 'Vue Team',
        year: '2022',
        title: 'Vue 3 Guide',
        description: 'vue 완벽 가이드 입니다!! ;)',
        price: '무료'
        });
        
       // let {author, title} = book; //구조분해된 author, title은 재할당돼서 반응성을 잃어버림(string형)

       let { author, title } = toRefs(book);
       
       let description = toRef(book,'description');

        return {
            author,
            title,
            description,
        }
    }
}
</script>

<style lang="scss" scoped>

</style>