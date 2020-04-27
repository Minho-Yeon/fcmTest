import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase/app'
import 'firebase/messaging'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyDkAjqTGx5kUSma1tUofFetX6ecbJIKs5Q",
  authDomain: "vue-fcm-eeed6.firebaseapp.com",
  databaseURL: "https://vue-fcm-eeed6.firebaseio.com",
  projectId: "vue-fcm-eeed6",
  storageBucket: "vue-fcm-eeed6.appspot.com",
  messagingSenderId: "51039885902",
  appId: "1:51039885902:web:8661e2a644f45d64dd411f",
  measurementId: "G-792NR3HYYM"
};

firebase.initializeApp(firebaseConfig)

const messaging = firebase.messaging()

messaging.usePublicVapidKey('BJRJ5C1lze3tUqSz0-lIW5Mj-hJ_mxtcBUmwgx-MbIRIIanFbYKW3se8eNsXPFH26YdMFNGJp1EHL5V5c5O3izE')

// 알림 수신을 위한 사용자 권한 요청
Notification.requestPermission()
  .then((permission) => {
    console.log('permission ', permission)
    if (permission !== 'granted') {
      alert('알림을 허용해주세요')
    }
  }).catch(err=>{
    console.log('Notification Error:',err);
  })

// TODO: Send token to server for send notification
messaging.getToken()
  .then(token=>{
    console.log('getToken()성공:',token)
  }).catch(err=>{
    console.error('getToken()에러',err)
  });

// Handle received push notification at foreground
messaging.onMessage(payload => {
  console.log(payload)
  console.log('여기 실행해야지');
  alert(payload.data.message)
})

new Vue({
  render: h => h(App),
}).$mount('#app')
