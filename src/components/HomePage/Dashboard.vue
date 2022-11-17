<template>
  <div class="products">
    <h1>Dashboard Component</h1>
    <div class="logout">
      <h2>Profile</h2>
      <p>{{ name }}</p>
      <p>{{ email }}</p>
    </div>
  </div>
</template>

<script>
import { RouteEnum } from "../../router/routeEnum";
export default {
  name: "DashboardComponent",
  data() {
    return {
      name: "Test",
      email: "test@email.com",
    };
  },
  created() {
    let data = localStorage.getItem("user");
    data = JSON.parse(data);
    console.log(data);
    this.name = data.Name;
    this.email = data.Email;
  },
  methods: {
    removeUser() {
      localStorage.clear();
      this.$router.push(RouteEnum.LOGIN);
    },
  },
};
</script>

<style scoped>
</style>