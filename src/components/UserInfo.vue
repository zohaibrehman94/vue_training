<script setup>
import { defineProps } from 'vue'

const { user } = defineProps(['user'])
console.log(user.email);
const emit = defineEmits(['email'])


const sendEmailToParent = () => {
    console.log(user.email);
    emit("email", user.email)
}

</script>


<template lang="pug">
div
    | First Name : #{user.firstName}
    br
    | Last Name : #{user.lastName}
    br
    | email : #{user.email}

button.btn.btn-primary(@click="sendEmailToParent") Event

</template>

