<template>
  <div>
    <div class="justify-center d-flex align-center ">
      <div class="mt-6">
        <JacquinTranslationMessage />
        <MessageBox :message="translationMessage" :key="new Date().getTime()"/>
      </div>
    </div>

    <div style="position: fixed; bottom: 0; width: 100%" class="">
      <TranslateInput @translationResult="updateTranslationResult" />
    </div>
  </div>
</template>

<script lang="ts">
import JacquinTranslationMessage from '@/components/JacquinTranslationMessage.vue';
import MessageBox from '@/components/MessageBox.vue';
import TranslateInput from '@/components/TranslateInput.vue';

export default {
  name: 'home',
  components: {
    JacquinTranslationMessage,
    MessageBox,
    TranslateInput
  },
  data() {
    return {
      translationMessage: 'to esperand voc digitá ali embaixo...'
    }
  },
  methods: {
    updateTranslationResult(result: string) {
      this.translationMessage = result
    }
  }
}

</script>
