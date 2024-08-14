<script setup lang="ts">
import ButtonComponent from '@/components/ButtonComponent.vue';
import InputComponent from '@/components/InputComponent.vue';


import { useForm } from 'vee-validate';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
interface LoginForm {
    email: string;
    password: string;
}


function required(value: string) {
    return value ? true : 'This field is required';
}
function emailValidation(value: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value) ? true : 'Please enter a valid email address';
}

const router = useRouter();

const { handleSubmit, defineField, errors } = useForm<LoginForm>({
    initialValues: {
        email: '',
        password: '',
    },
    validationSchema: {
        email: [required, emailValidation],
        password: required,
    },
});
const [email] = defineField('email');
const [password] = defineField('password');

const onSubmit = handleSubmit(values => {
  localStorage.setItem('user', JSON.stringify(values));
  router.push('/');
});

onMounted(() => {
    localStorage.removeItem('user')
})
</script>
<template>
    <div class="signin">
        <div class="signin__form">
            <form @submit="onSubmit">
                <img class="logo" src="../assets/images/logo.png" />
                <InputComponent v-model="email" name="email" type="text" placeholder="email" :error-message="errors.email" />
                <InputComponent v-model="password" name="password" type="text" placeholder="password" :error-message="errors.password" />
                <ButtonComponent full-width>Sign In</ButtonComponent>
                <small>sign up</small>
            </form>
        </div>
    </div>
</template>
<style scoped lang="scss">
.signin {
    width: 100%;
    height: 100%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;

    &__form {
        width: 400px;
        background-color: #CCCCFF;
        border-radius: 1rem;
        padding: 2rem 1rem;
        box-sizing: border-box;
        margin-top: -250px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

        form {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
    }
    .logo {
        margin: auto;
        height: 100px;
        width: min-content;
    }
}
</style>