<template>
    <div>
        <!-- <div :class="{ active: isActive, 'text-danger' : hasError }">텍스트 입니다.</div> -->
        <div class="text" :class="classObject">텍스트 입니다.</div>
        <button v-on:click="toggle">toggle</button>
        <button v-on:click="hasError = !hasError">toggleError</button>
    </div>
</template>

<script>
    import {computed, reactive, ref} from 'vue';
    export default {
        setup() {
            const isActive = ref(true);
            const hasError =ref(false);

            // const classObject = reactive({
            //     active: true,
            //     'text-danger' : true,
            // });

            const classObject = computed(() => {
                return {
                    active: true,
                    'text-danger': true,
                }
            })

            const toggle = () => {
                isActive.value = !isActive.value;
            }
            return {
                isActive,
                toggle,
                hasError,
                classObject
            };
        },
    }
</script>

<style scoped>
    .active {
        font-weight: 900;
    }
    .text-danger {
        color : red;
    }
</style>