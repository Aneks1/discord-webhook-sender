<template>
    <Error
        v-if="errorMessage != ''"
        :errorMsg="errorMessage"
    />
    <div class="body">
        <span class="color-white font-size-4vw font-weight-600">Discord Webhook Sender</span>
        <div class="flex column radius-10px black width-60vw height-fit-content justify-center align-flex-start padding-sides-5vw box-sizing-border-box box-sizing-border-box gap-2vh">
            <span class="color-white font-size-3vw font-weight-600">Webhook Info</span>
            <span class="color-white font-size-2vw font-weight-500">Webhook URL</span>
            <input class="border-color-cyan border-3px radius-5px height-fit-conten width-50vw black color-white font-weight-100 font-size-2vh padding-sides-10px" type="text" placeholder="https://discord.com/api/webhooks/69696969696/aidhiasdahda" required v-model="url"/>
            <span class="color-white font-size-2vw font-weight-500">Username (Optional)</span>
            <input class="border-color-cyan border-3px radius-5px height-fit-conten width-50vw black color-white font-weight-100 font-size-2vh padding-sides-10px" type="text" placeholder="Definitely Not Amex" required v-model="name"/>
            <span class="color-white font-size-2vw font-weight-500">Avatar (Optional)</span>
            <input class="border-color-cyan border-3px radius-5px height-fit-conten width-50vw black color-white font-weight-100 font-size-2vh padding-sides-10px" type="text" placeholder="https://freecoolimages.com/mycoolimage.png" required v-model="avatar"/>
        </div>
        <div class="flex column radius-10px black width-60vw height-fit-content justify-center align-flex-start padding-sides-5vw box-sizing-border-box gap-2vh">
            <span class="color-white font-size-3vw font-weight-600">Message Content</span>
            <span class="color-white font-size-2vw font-weight-500">Message</span>
            <textarea class="border-color-cyan border-3px radius-5px height-fit-contenh width-50vw black color-white font-weight-100 font-size-2vh padding-sides-10px" type="text" placeholder="Pineapple doesn't belong on pizza!" rows="10" maxlength="2000" required v-model="message"/>
        </div>
            <button class="width-10vw height-10vh border-color-cyan border-3px radius-5px black color-cyan font-weight-600 font-size-2vh" @click="sendWebhook" :disabled="buttonDisabled">Send Webhook</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios'
import Error from './components/error.vue'

export default defineComponent({
    name: 'WebhookSender',
    components: {
        Error
    },
    data() {
        return {
            url: '',
            message: '',
            name: '',
            avatar: '',
            errorMessage: '',
            buttonDisabled: false
        }
    },
    methods: {
        async sendWebhook() {

            if(this.url == '' || this.message == '') { return this.throwError('Please make sure to complete all the fields.') }
            axios.get(this.url).catch(err => { console.log(err); return this.throwError('Invalid Webhook URL') })
            if(!this.avatar.startsWith('https://' || 'http://')  || !this.avatar.endsWith('.png' || '.jpg' || '.jpeg' || '.webp')) { return this.throwError('Invalid Image URL. Make sure the images format is .png, .jpg, .jpeg, or .webp') }



            await axios.post(this.url, { content: this.message, username: this.name, avatar_url: this.avatar })
        },

        async throwError(error: string) {
            this.errorMessage = error
            this.buttonDisabled = true
            setTimeout(() => { this.errorMessage = ''; this.buttonDisabled = false }, 4500)
            return
        }
    },
})
</script>

<style>
    @import "../public/main.css";
</style>