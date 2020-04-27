// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.6.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
    apiKey: "AIzaSyDkAjqTGx5kUSma1tUofFetX6ecbJIKs5Q",
    projectId: "vue-fcm-eeed6",
    messagingSenderId: "51039885902",
    appId: "1:51039885902:web:8661e2a644f45d64dd411f",
})
// firebase.analytics();
// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging()

// 백그라운드 상태에서 받은 알림 처리
messaging.setBackgroundMessageHandler((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload)
  // Customize notification here
  const notificationTitle = 'Background Message Title'
  const notificationOptions = {
    body: payload.data.statuss,
  }

  return self.registration.showNotification(notificationTitle,
    notificationOptions)
})