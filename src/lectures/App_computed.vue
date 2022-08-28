<template>
    <div>
        <p> {{teacher.name}} 의 첫번째 과목은?</p>
        <!-- <p> {{teacher.lectures.length > 0 ? teacher.lectures[0] : '없습니다.'}}</p> -->
        <p>{{hasLectures}}</p>
        <p>{{hasLectures}}</p>
        <p>{{hasLectures}}</p>
        <p>{{existLecture()}}</p>
        <p>{{existLecture()}}</p>
        <p>{{existLecture()}}</p>

        <button v-on:click="counter++">counter : {{counter}}</button>

        <p>{{fullName}}</p>
    </div>
</template>

<script>
import { reactive,computed, ref } from 'vue';

    export default {
        setup() {
        const teacher = reactive({
            name : 'Kim',
            lectures: ['HTML/CSS', 'JavaScript', 'Vue3'],

            });
        const hasLectures = computed(() => { 
            console.log('computed');
            return teacher.lectures.length > 0 ? teacher.lectures[0] : '없습니다.';
            });

        const existLecture = () => {
            console.log('metohd');
            return teacher.lectures.length > 0 ? teacher.lectures[0] : '없습니다.';
            };

        const counter = ref(0);

        const firstName = ref('홍');
        const lastName = ref('길동');

        const fullName = computed({
            get() {
                return firstName.value + ' '+ lastName.value; ss
            },
            set(value) { 
                console.log('set() value', value);
                console.log('value.split(" ")', value.split(' '));
                [firstName.value, lastName.value] = value.split(' ');
            }
                
        });
        
        console.log(fullName);
        console.log(fullName.value);
        fullName.value = '유 성훈';
        //fullName.value = '김 민수'; //Write operation failed: computed value is readonly
        return {
            teacher,
            hasLectures,
            existLecture,
            counter,
            fullName,
            }
        },  
    }
</script>

<style lang="scss" scoped>

</style>