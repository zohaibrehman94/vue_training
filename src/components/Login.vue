<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter();
let firstName = ref("");
let lastName = ref("");
let password = ref("");
let email = ref("");

const isFirstNameValid = computed(() => firstName.value !== '');
const isLastNameValid = computed(() => lastName.value !== '');
const isPasswordValid = computed(() => password.value !== '' && password.value.length >= 8);
const isEmailValid = computed(() => email.value !== '' && String(email.value)
    .toLowerCase()
    .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ));

const saveForm = (event) => {
    event.preventDefault()
    console.log('saveform clicked', { firstName: firstName.value, lastName: lastName.value, password: password.value, email: email.value });
    if (!isEmailValid.value) {
        console.log('Enter a valid email');
        return
    }

    if (!isPasswordValid.value) {
        console.log('Password should not be empty and must be greater than or equal to 8 digits');
        return
    }

    if (!isFirstNameValid.value) {
        console.log('First name can not be empty');
        return
    }

    if (!isLastNameValid.value) {
        console.log('Last name name can not be empty');
        return
    }
    const user = { firstName: firstName.value, lastName: lastName.value, password: password.value, email: email.value }
    router.push({
        path: '/about',
        query: { userInfo: JSON.stringify(user) },
        meta: { user }
    })
}
</script>

<template>
    <form>

        <div class="row">
            <div class="col-md-6 mb-4">
                <div class="form-outline">
                    <label class="form-label" for="firstName">First Name</label>
                    <input v-model.trim="firstName" type="text" id="firstName" class="form-control" />
                </div>
            </div>
            <div class="col-md-6 mb-4">
                <div class="form-outline">
                    <label class="form-label" for="lastName">Last Name</label>
                    <input v-model.trim="lastName" type="text" id="lastName" class="form-control" />

                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-6 mb-4 d-flex align-items-center">
                <div class="form-outline datepicker w-100">
                    <label class="form-label">Password</label>
                    <input type="password" v-model.trim="password" class="form-control" />
                </div>
            </div>

        </div>

        <div class="row">
            <div class="col-md-12 mb-4 pb-2">
                <div class="form-outline">
                    <label class="form-label" for="emailAddress">Email</label>
                    <input type="email" id="emailAddress" class="form-control" v-model.trim="email" />

                </div>
            </div>
        </div>


        <div class="pt-2">
            <button class="btn btn-primary btn" @click="saveForm">
                Login
            </button>
        </div>
    </form>
</template>