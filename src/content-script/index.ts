// В DOM инжектится модалка по сообщению от бэкграунда и возможно отправлять сообщение по нажатию кнопок
// 1. Сделать вствку модалки поверх всего на странице

console.log('content-script')

const container = document.createElement('div')
const body = document.querySelector('body')!
body.appendChild(container)

import { createApp } from 'vue'
import App from '../popup/App.vue'
createApp(App).mount(container)

export { }
