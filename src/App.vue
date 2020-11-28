<template>
  <div ref="app" id="app">
    <Follower :position="position"/>
    <router-view/>
    <div class="lang w-8 h-8 flex items-center justify-center text-gray-900 hover:text-white hover:bg-gray-600 transition duration-500" @click="changeLang">
      {{langOptions[lang]}}
    </div>
    <div id="nav" class="hidden flex-col">
      <a
        class="w-4 h-4 m-2 bg-gray-400 hover:bg-gray-600 transition duration-500"
        href="#"
        title="info"></a>
      <a
        class="w-4 h-4 m-2 bg-gray-400 hover:bg-gray-600 transition duration-500"
        href="#about"
        title="About"></a>
    </div>
  </div>
</template>
<script>
import Follower from '@/components/Follower.vue'
import { mapActions } from 'vuex'
export default {
  components: {
    Follower
  },
  data() {
    return {
      lang: 'en-US',
      langOptions: {
        'zh-TW': '中',
        'en-US': 'EN'
      },
      position: {
        x: 0,
        y: 0
      }
    }
  },
  methods: {
    ...mapActions({
      setStep: 'info/setStep'
    }),
    changeLang() {
      if (this.lang === 'zh-TW') {
        this.lang = 'en-US'
      } else {
        this.lang = 'zh-TW'
      }
      this.$i18n.locale = this.lang
    }
  },
  mounted() {
    this.$i18n.locale = this.lang
    window.onmousemove = async(event) => {
      const { clientX, clientY } = event
      await this.$nextTick()
      this.position.x = clientX
      this.position.y = clientY
    }
  }
}
</script>
<style lang="scss">
@import '@/styles/style.scss';
</style>
