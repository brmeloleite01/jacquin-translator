<template>
    <div class="box-balao animate__animated  animate__flipInX" id="box">
        <div class="balao elevation-4 text-center">
            <p>
                {{ message }}
            </p>
            
        </div>
    </div>
</template>
<script lang="ts">
export default {
    name: 'message-box',
    props: {
        message: {
            type: String
        }
    }
}
</script>
<style>
.box-balao {
    z-index: 1000;
    width: 300px;
    margin: -50px auto;
    position: relative;
}

.box-balao .balao {
    background-color: #ffffff;
    color: #9fa2a7;
    padding: 15px 25px;
    cursor: default;
    border-radius: 10px;
}


.box-balao .balao p {
    font-size: 1.2em;
    text-align: center;
}


</style>