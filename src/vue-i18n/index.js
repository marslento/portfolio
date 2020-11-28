import Vue from 'vue'
import VueI18n from 'vue-i18n'
import enUS from '@/lang/en-US.json'
import zhTW from '@/lang/zh-TW.json'

Vue.use(VueI18n)

const locale = 'zh-TW'
const messages = {
  'en-US': enUS,
  'zh-TW': zhTW
}

const i18n = new VueI18n({
  locale,
  messages
})
export default i18n
