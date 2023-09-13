<template>
    <div class="" style="position: relative; overflow: hidden;">
        <svg id="sw-js-blob-svg" class="shape " viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0" >
                    <stop id="stop1" stop-color="rgba(248, 117, 55, 1)" offset="0%"></stop>
                    <stop id="stop2" stop-color="rgba(251, 168, 31, 1)" offset="100%"></stop>
            </linearGradient>
        </defs>
        <path fill="url(#sw-gradient)"
            d="M26.6,-33.9C32.1,-27.1,32.5,-16.5,31.5,-7.7C30.4,1.1,28,7.9,24.7,14.9C21.4,21.9,17.3,29,10.4,33.7C3.6,38.3,-6,40.5,-13.8,37.8C-21.7,35,-27.8,27.3,-32.4,18.9C-37,10.5,-40.2,1.4,-38.9,-7C-37.6,-15.5,-31.9,-23.3,-24.7,-29.7C-17.4,-36.1,-8.7,-41.1,0.9,-42.2C10.6,-43.3,21.2,-40.6,26.6,-33.9Z"
            width="100%" height="100%" transform="translate(50 50)" stroke-width="0"
            style="transition: all 0.3s ease 0s;"></path>
        </svg>


        <img src="/jacquin.png" alt="jacquin" class="avatar">

    
        
</div>
</template>
<script lang="ts">
import MessageBox from './MessageBox.vue';

export default {
    name: 'jacquin-translation-message',
    components:{
        MessageBox
    }
}
</script>

<style>


img.avatar {
  position: relative;
  z-index: 1;
  width: 60%;
  margin-left: 9vh;
  border-radius: 50%;
}

svg.shape {
  position: absolute;
  top: 60px;
  left: 20px;
  z-index: 0;
  width: 100%;
}




</style>