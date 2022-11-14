<template>
  <div class="products">
    <h1>Dashboard Component</h1>
    <div class="logout">
      <v-btn v-on:click="getUserDetials" rounded color="primary" dark>
        Details
      </v-btn>
      <v-btn v-on:click="removeUser" rounded color="primary" dark>
        Log Out
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashboardComponent",
  methods: {
    removeUser() {
      localStorage.clear();
    },
    getUserDetials() {
      let data = localStorage.getItem("user");
      data = JSON.parse(data);
      console.log(data);
    },
  },
};
</script>

<style scoped>
.products {
  background-color: rgb(247, 197, 255);
  padding: 40px;
}
</style>