<template>
    <div>
        <v-container fluid>
            <v-row class="align-center items-center justify-center pb-0">
                <v-col lg="4">

                    <v-text-field variant="solo" :hide-details="true" v-model="textToTranslate" :loading="loading" placeholder="Mexe seu bundo e escreve aqui">
                        <template v-slot:append>
                            <v-btn icon="mdi-send" color="warning" @click="() => translate()">

                            </v-btn>
                        </template>
                    </v-text-field>

                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script lang="ts">
import axios from 'axios'

export default {
    name: 'translate-input',
    data() {
        return {
            textToTranslate: "",
            loading: false
        }
    },
    methods: {
    async translate(){
        this.loading = true
           const {data} = await axios.post('https://southamerica-east1-nodebr-demo-test.cloudfunctions.net/api/translation', { text: this.textToTranslate})
           this.$emit('translationResult', data.resultText)
           this.loading = false
        }
    },
    mounted(){
        console.log('https://southamerica-east1-nodebr-demo-test.cloudfunctions.net/api/translation')
    }

}
</script>
<style>
.v-field{
    border-radius: 30px !important;
}
</style>