<template>
  <nav class="navbar">
    <div class="navbar-container container">
      <input type="checkbox" name="" id="" />
      <div class="hamburger-lines">
        <span class="line line1"></span>
        <span class="line line2"></span>
        <span class="line line3"></span>
      </div>
      <ul class="menu-items">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Category</a></li>
        <li><a href="#">Menu</a></li>
        <li><p style="font-style:italic; font-family: 'Times New Roman', Times, serif;">Hi {{ name }}</p></li>
        <li>
          <v-btn v-on:click="removeUser" rounded color="primary" dark>
            Log Out
          </v-btn>
        </li>
      </ul>
      <h1 class="logo">Navbar</h1>
    </div>
  </nav>
</template>

<script>
import { RouteEnum } from "../../router/routeEnum";
export default {
  name: "HeaderComponent",
  data() {
    return {
      name: "Test",
    };
  },
  created() {
    let data = localStorage.getItem("user");
    data = JSON.parse(data);
    console.log(data);
    this.name = data.Name;
  },
  methods: {
    removeUser() {
      localStorage.clear();
      this.$router.push(RouteEnum.LOGIN);
    },
  },
};
</script>

<style>
.v-toolbar__content {
  padding: 0px !important;
  background: #27445c;
  box-shadow: 0px 5px 10px 0px #aaa;
  display: block;
}
.navbar {
  padding: 0px !important;
}
.navbar input[type="checkbox"],
.navbar .hamburger-lines {
  display: none;
}

.container {
  max-width: 1200px;
  width: 90%;
  padding-top: 30px;
}

.navbar {
  width: 100%;
  background: #27445c;
  color: azure;
  z-index: 100;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  height: 50px;
  align-items: center;
}

.menu-items {
  order: 2;
  display: flex;
}
.logo {
  order: 1;
  font-size: 2.1rem;
}

.menu-items li {
  list-style: none;
  margin-left: 1.5rem;
  font-size: 1.2rem;
}

.navbar a {
  color: azure;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease-in-out;
}

.navbar a:hover {
  color: #19c324;
}

@media (max-width: 768px) {
  .navbar-container input[type="checkbox"],
  .navbar-container .hamburger-lines {
    display: block;
  }

  .navbar-container {
    display: block;
    position: relative;
    height: 64px;
  }

  .navbar-container input[type="checkbox"] {
    position: absolute;
    display: block;
    height: 32px;
    width: 30px;
    top: 20px;
    left: 20px;
    z-index: 5;
    opacity: 0;
    cursor: pointer;
  }

  .navbar-container .hamburger-lines {
    display: block;
    height: 28px;
    width: 35px;
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .navbar-container .hamburger-lines .line {
    display: block;
    height: 4px;
    width: 100%;
    border-radius: 10px;
    background: aliceblue;
  }

  .navbar-container .hamburger-lines .line1 {
    transform-origin: 0% 0%;
    transition: transform 0.3s ease-in-out;
  }

  .navbar-container .hamburger-lines .line2 {
    transition: transform 0.2s ease-in-out;
  }

  .navbar-container .hamburger-lines .line3 {
    transform-origin: 0% 100%;
    transition: transform 0.3s ease-in-out;
  }

  .navbar .menu-items {
    padding-top: 100px;
    background: #27445c;
    height: 100vh;
    max-width: 270px;
    transform: translate(-150%);
    display: flex;
    flex-direction: column;
    margin-left: -50px;
    padding-left: 0px;
    transition: transform 0.5s ease-in-out;
  }

  .navbar .menu-items li {
    margin-bottom: 1.8rem;
    font-size: 1.1rem;
    font-weight: 500;
  }

  .logo {
    position: absolute;
    padding-top: 5px;
    top: 4px;
    right: 140px;
    font-size: 2.1rem;
  }

  .navbar-container input[type="checkbox"]:checked ~ .menu-items {
    transform: translateX(0);
  }

  .navbar-container input[type="checkbox"]:checked ~ .hamburger-lines .line1 {
    transform: rotate(45deg);
  }

  .navbar-container input[type="checkbox"]:checked ~ .hamburger-lines .line2 {
    transform: scaleY(0);
  }

  .navbar-container input[type="checkbox"]:checked ~ .hamburger-lines .line3 {
    transform: rotate(-45deg);
  }
}
</style>