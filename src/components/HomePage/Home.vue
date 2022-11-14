<template>
  <div>
    <!-- Components -->
    <Header />
    <Dashboard />
    <Footer />
  </div>
</template>

<script>
import Dashboard from "./Dashboard.vue";
import Header from "./Header.vue";
import Footer from "./Footer.vue";

export default {
  name: "HomePage",
  components: {
    Header,
    Dashboard,
    Footer,
  },
};
</script>

<style scoped>

</style>