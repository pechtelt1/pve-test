<template>
  <div>
    <!-- <NuxtRouteAnnouncer /> -->
    <NuxtWelcome />
    <p>Fetch-resultaat:</p>
    <pre>{{ fetchData }}</pre>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// Voeg de fetch-polyfill toe
if (typeof fetch === 'undefined') {
  import('whatwg-fetch'); // Dynamisch laden van polyfill
}

// Reactieve variabele om de fetch-data op te slaan
const fetchData = ref('Laden...');

onMounted(async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1'); // Vervang door je eigen URL indien nodig
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    fetchData.value = JSON.stringify(data, null, 2); // Data opslaan in de reactieve variabele
  } catch (error) {
    fetchData.value = `Fetch mislukt: ${error.message}`;
  }
});
</script>