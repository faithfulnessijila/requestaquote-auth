
<script setup>
import { ref, onMounted } from 'vue';

const username = ref('');

onMounted(() => {
  username.value = localStorage.getItem('username') || '';
});
</script>

<template>
  <!-- <header>
    <p>Welcome, {{ username }}</p>
  </header> -->

  <router-view />
</template>





<!-- <script setup>
</script>

<template>
  <header>

  </header>
  created() {
  this.username = localStorage.getItem('username') || '';
}
 <router-view/>
</template> -->
