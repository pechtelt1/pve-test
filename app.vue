<template>
  <div>
    <p v-if="fetchData.pending">Laden...</p>
    <pre v-else-if="fetchData.data">{{ fetchData.data }}</pre>
    <p v-else>Fout: {{ fetchData.error }}</p>
  </div>
</template>

<script setup>
const fetchData = useAsyncData(async () => {
  const response = await $fetch('https://jsonplaceholder.typicode.com/todos/1'); // Test-API
  return response;
});
</script>