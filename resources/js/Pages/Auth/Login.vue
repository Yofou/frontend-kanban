<script setup lang="ts">
import GuestLayout from '@/Layouts/GuestLayout.vue';
import { Head, useForm } from '@inertiajs/inertia-vue3';

defineProps<{
    canResetPassword: boolean;
    status?: string;
    title: string;
}>();

const form = useForm({
    email: '',
    password: '',
    remember: false
});

const submit = () => {
    form.post('/login', {
        onFinish: () => form.reset('password'),
    });
};
</script>

<template>
    <GuestLayout :title="title">
        <Head title="Log in" />

        <form @submit.prevent="submit">
            <h2>hello world</h2>
        </form>
    </GuestLayout>
</template>
