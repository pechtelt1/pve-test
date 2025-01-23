<template>
  <div>
    <p v-if="fetchData.pending">Laden...</p>
    <pre v-else-if="fetchData.data">{{ fetchData.data }}</pre>
    <p v-else>Fout: {{ fetchData.error }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const fetchData = ref('Laden...');
const loading = ref(true);

onMounted(async () => {
  console.log('Start fetch'); // Controleer of dit wordt gelogd
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    console.log('Response status:', response.status); // Controleer status
    const data = await response.json();
    console.log('Fetched data:', data); // Controleer opgehaalde data
    fetchData.value = JSON.stringify(data, null, 2);
  } catch (error) {
    console.error('Fetch failed:', error.message); // Controleer foutmeldingen
    fetchData.value = `Fout bij ophalen: ${error.message}`;
  } finally {
    loading.value = false;
  }
});
</script>