<template>
    <Error
        v-if="errorMessage != ''"
        :errorMsg="errorMessage"
    />
    <div id="container">
        <span id="title">Discord Webhook Sender</span>
        <div class="panel">
            <span class="subtitle">Webhook Info</span>
            <span class="description">Webhook URL</span>
            <input type="text" class="inputArea" placeholder="https://discord.com/api/webhooks/" required v-model="url"/>
            <span class="description">Username Overwrite (Optional)</span>
            <input type="text" class="inputArea" placeholder="Bot Name" v-model="name"/>
            <span class="description">Avatar Overwrite (Optional)</span>
            <input type="text" class="inputArea" placeholder="https://imgur.com/" v-model="avatar"/>
        </div>
        <div class="panel">
            <span class="subtitle">Message Content</span>
            <span class="description">Text</span>
            <textarea id="message" class="inputArea" rows="10" maxlength="2000" placeholder="This is a message!" required v-model="message"/>
        </div>
        <div class="panel">
            <span class="subtitle">Embeds</span>
            <Embed 
                v-for="(embed, i) in embeds"
                :key="i"
                :embed="embeds[i]"
                :order="i"
            />
            <button class="new-embed" @click="createEmbed()">
                <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48">
                    <path d="M450-200v-250H200v-60h250v-250h60v250h250v60H510v250h-60Z"/>
                </svg>
            </button>
        </div>
        <button id="send" @click="sendWebhook()" :disabled="buttonDisabled">Send Message</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios'
import Error from './components/Error.vue'
import Embed from './components/Embed.vue'
import embedType from './util/embed-type'

export default defineComponent({
    name: 'App',
    components: {
        Error,
        Embed
    },
    data() {
        return {
            url: '',
            message: '',
            name: '',
            avatar: '',
            embeds: [] as embedType[],
            errorMessage: '',
            buttonDisabled: false,
        }
    },
    methods: {
        async sendWebhook() {

            if(this.url == '' || this.message == '') { return this.throwError('Please make sure to complete all the fields.') }
            axios.get(this.url).catch(err => { console.log(err); return this.throwError('Invalid Webhook URL') })
            if(this.avatar != '' && (!this.avatar.startsWith('https://' || 'http://')  || !this.avatar.endsWith('.png' || '.jpg' || '.jpeg' || '.webp'))) { return this.throwError('Invalid Image URL. Make sure the images format is .png, .jpg, .jpeg, or .webp') }

            await axios.post(this.url, { content: this.message, username: this.name, avatar_url: this.avatar, embeds: this.embeds })
        },
        createEmbed() {
            this.embeds.push({
                title: '',
                color: 0,
                description: '',
                timestamp: '',
                url: '',
                author: {},
                image: {},
                thumbnail: {},
                footer: {},
                fields: []
            } as embedType)
            console.log(this.embeds)
        },
        throwError(error: string) {
            this.errorMessage = error
            this.buttonDisabled = true
            setTimeout(() => { this.errorMessage = ''; this.buttonDisabled = false }, 4500)
            return
        }
    },
})
</script>

<style>
    @import "./style.css";
</style>