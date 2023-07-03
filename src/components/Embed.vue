<template>
    <div class="embed">
        <span class="embed-sub">Embed</span>
        <span class="embed-desc">Title</span>
        <input class="inputArea" placeholder="Embed Title">
        <span class="embed-desc">Content (Optional)</span>
        <input class="inputArea" placeholder="Hello World!">
        <span class="embed-desc">Thumbnail URL (Optional)</span>
        <input class="inputArea" placeholder="https://imgur.com/">
        <button class="delete-embed">
            <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M261-120q-24.75 0-42.375-17.625T201-180v-570h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm438-630H261v570h438v-570ZM367-266h60v-399h-60v399Zm166 0h60v-399h-60v399ZM261-750v570-570Z"/></svg>
        </button>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import embedType from '../util/embed-type';

export default defineComponent({
    name: 'Embed',
    data() {
        return {
            title: '',
            description: '',
            thumbnail: ''
        }
    },
    props: {
        embed: Object as PropType<embedType>,
        order: Number
    }
})
</script>

<style scoped>
.embed {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    height: fit-content;
    box-sizing: border-box;
    padding: 2rem;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
    gap: 2vh;
}
.embed-sub {
    font-size: 25px;
    font-weight: bold;
}
.embed-desc {
    font-size: 20px;
}
.delete-embed {
    height: 2.5rem;
    width: 2.5rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 5px;
    background: none;
    border: 2px solid rgb(255, 70, 70);
    border-radius: 5px;
}
.delete-embed > svg {
    fill: rgb(255, 70, 70);
}
.delete-embed:hover {
    border: 2px solid rgb(255, 70, 70);
    background-color: rgba(255, 255, 255, 0.1);
    cursor: pointer;
    transition: background-color 300ms,
}
</style>