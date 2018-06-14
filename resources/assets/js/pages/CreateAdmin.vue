<template>
    <div class="create-admin">
        <h3>Создание администратора сайта</h3>
        <div>
            Пароль
            <br>
            <input type="password">
        </div>
        <div>
            Подтверждение пароля
            <br>
            <input type="password">
        </div>
        <br>
        <button @click="click">Создать</button>
    </div>
</template>


<script>
    export default {
        methods: {
            click() {
                alert(1);
            }
        }
    }
</script>


<style lang="css" scoped>
    .create-admin {
        max-width: 300px;
        margin: auto;
    }

    input {
        width: 100%;
    }
</style>