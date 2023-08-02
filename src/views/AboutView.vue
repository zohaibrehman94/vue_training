<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router'
import UserInfo from '../components/UserInfo.vue';

const router = useRouter();
const user = ref({});



onMounted(() => {
  const userParam = router.currentRoute.value.query.userInfo;
  user.value = JSON.parse(userParam);
  console.log(user.value);
});


const emailReceived = (event) => {
  console.log(event);
}
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <userInfo :user="user" @email="emailReceived" />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
