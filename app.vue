<template>
  <div>
    <p>Fetch-resultaat:</p>
    <pre>{{ fetchData }}</pre>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// Reactieve variabele om de data op te slaan
const fetchData = ref('Laden...');

onMounted(() => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true); // Vervang door je eigen URL indien nodig

  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      fetchData.value = JSON.stringify(JSON.parse(xhr.responseText), null, 2); // Sla de data op
    } else {
      fetchData.value = `Fout bij ophalen: HTTP ${xhr.status}`;
    }
  };

  xhr.onerror = function () {
    fetchData.value = 'Netwerkfout of CORS-probleem';
  };

  xhr.send();
});
</script>