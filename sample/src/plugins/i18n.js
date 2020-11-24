import  Vue from 'vue';
import VueI18n from 'vue-i18n';
import vietnamese from '../langs/vi.json'
import english from '../langs/en.json'

Vue.use(VueI18n)

const messages = {
    'en' : english,
    'vi' : vietnamese
}

const i18n = new VueI18n({
    locale: 'vi',
    messages: messages
})

export default i18n