<script setup>
import { defineProps } from 'vue'

const { user } = defineProps(['user'])
const emit = defineEmits(['email'])


const sendEmailToParent = () => {
    emit("email", user.email)
}

</script>


<template>
    <div>
        First Name : {{ user.firstName }}
        Last Name : {{ user.firstName }}
        email : {{ user.firstName }}
    </div>

    <button class="btn btn-primary" @click="sendEmailToParent">Event</button>
</template>

