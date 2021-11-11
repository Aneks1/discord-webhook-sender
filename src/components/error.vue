<template>
    <div class="width-100 flex column justify-flex-start align-center animation2">
        <div class="width-30vw height-30vh position-fixed grey z-index-1 radius-20px flex column align-center justify-center animation1 padding-sides-10px box-sizing-border-box">
            <span class="font-size-3vw color-white font-weight-600">Error!</span>
            <span class="font-size-2vw color-white font-weight-500 text-center">{{ errorMsg }}</span>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Error',
    props: {
        errorMsg: String
    }
})
</script>

<style>
    @import "../../public/main.css";

    @keyframes error {
        from { margin-top: -50vh; }
        to { margin-top: 5vh; }
    }

    @keyframes errorDisappear {
        from { opacity: 1; }
        to { opacity: 0; }
    }

    .animation1 {
        margin-top: -50vh;
        animation-name: error;
        animation-duration: 0.7s;
        animation-delay: 0.5s;
        animation-fill-mode: forwards;
    }

    .animation2 {
        opacity: 1;
        animation-name: errorDisappear;
        animation-delay: 3.5s;
        animation-duration: 1s;
        animation-fill-mode: forwards;
    }
</style>