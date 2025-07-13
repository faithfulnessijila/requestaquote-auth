// import { createRouter, createWebHistory } from 'vue-router';
// import SignIn from '@/views/sign-in.vue';
// import SignUp from '@/views/sign-up.vue';
// import homepage from '@/views/homepage.vue';
// import Requestaquote from '@/views/Requestaquote.vue';
// import forgotpassword from '@/views/forgotPassword.vue';
// import newPassword from '@/views/newPassword.vue';
// import OTP from '@/views/OTP.vue';

// const routes = [
//   {
//     path: '/sign-in', component: SignIn
//   },
//   {
//     path: '/sign-up', component: SignUp
//   },
//   {
//     path: '/', component: homepage
//   },
//   {
//     path: '/requestaquote',
//     component: Requestaquote,
//     beforeEnter: (to, from, next) => {
//       const token = localStorage.getItem('token');
//       token ? next() : next('/sign-in');
//     }
//   },
//   {
//     path: '/forgotpassword', component: forgotpassword
//   },
//   {
//     path: '/newPassword', component: newPassword
//   },
//   {
//     path: '/OTP', component: OTP
//   }
// ];

// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// });

// export default router;
















import  { createRouter, createWebHistory } from 'vue-router';
import SignIn from '@/views/sign-in.vue';
import SignUp from '@/views/sign-up.vue';
import homepage from '@/views/homepage.vue';
import Requestaquote from '@/views/Requestaquote.vue';
import forgotpassword from '@/views/forgotPassword .vue';
import newPassword from '@/views/newPassword.vue';
import OTP from '@/views/OTP.vue';





const routes = [
  {
    path: '/sign-in', component: SignIn
  },
  {
    path: '/sign-up', component: SignUp
  },
  {
    path: '/', component: homepage
  },
  {
    path: '/requestaquote', component: Requestaquote
  },
  {
     path: '/forgotpassword', component: forgotpassword
  },
  {
       path: '/newPassword', component: newPassword
  },
  {
         path: '/OTP', component: OTP
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router;



