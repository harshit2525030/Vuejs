<template>
  <v-container class="container" fill-height>
    <v-row class="text-center" justify="center">
      <v-col cols="12" sm="5" md="5" lg="4">
        <v-card elevation="3" outlined style="padding: 20px">
          <v-img
            :src="require('../assets/logo.svg')"
            class="my-3"
            contain
            height="80"
          />
          <h2>Register</h2>
          <!-- Validation Form -->
          <validation-observer ref="observer">
            <form @submit.prevent="submit">
              <!-- Name -->
              <validation-provider
                v-slot="{ errors }"
                name="Name"
                rules="required|max:15"
              >
                <v-text-field
                  v-model="name"
                  :counter="15"
                  :error-messages="errors"
                  label="Name"
                  required
                ></v-text-field>
              </validation-provider>
              <!-- Email -->
              <validation-provider
                v-slot="{ errors }"
                name="email"
                rules="required|email"
              >
                <v-text-field
                  v-model="email"
                  :error-messages="errors"
                  label="E-mail"
                  required
                ></v-text-field>
              </validation-provider>
              <!-- Password -->
              <validation-provider
                v-slot="{ errors }"
                name="Password"
                rules="required|min:6|max:12"
              >
                <v-text-field
                  v-model="password"
                  :counter="12"
                  :error-messages="errors"
                  label="Password"
                  type="password"
                  required
                ></v-text-field>
              </validation-provider>
              <!-- Confirm Password -->
              <validation-provider
                v-slot="{ errors }"
                name="Confirm Password"
                rules="required|min:6|max:12"
              >
                <v-text-field
                  v-model="confirmPassword"
                  :counter="12"
                  :error-messages="errors"
                  label="Confirm Password"
                  type="password"
                  required
                ></v-text-field>
              </validation-provider>

              <v-btn color="primary" depressed elevation="2" type="submit">
                Register
              </v-btn>
            </form>
          </validation-observer>

          <v-main style="padding-top: 15px">
            <router-link to="/login"> Return to login </router-link>
          </v-main>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import {
  required,
  digits,
  email,
  min,
  max,
  regex,
} from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";
// import axios from "axios";
import { RouteEnum } from "../router/routeEnum";
import { useToastr } from "./toastr";
import { APIService } from "../services";

const toastr = useToastr();

setInteractionMode("eager");

extend("password", {
  ...digits,
  message: "{_field_} needs to be {length} digits. ({_value_})",
});

extend("required", {
  ...required,
  message: "{_field_} can not be empty",
});

extend("max", {
  ...max,
  message: "{_field_} may not be greater than {length} characters",
});

extend("min", {
  ...min,
  message: "{_field_} should be greater than {length} characters",
});

extend("regex", {
  ...regex,
  message: "{_field_} {_value_} does not match {regex}",
});

extend("email", {
  ...email,
  message: "Email must be valid",
});

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  name: "RegisterPage",
  data: () => ({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    checkbox: true,
  }),

  methods: {
    // validate_password() {
    //   var pass = document.getElementById("pass").value;
    //   var confirm_pass = document.getElementById("confirm_pass").value;
    //   if (pass != confirm_pass) {
    //     toastr.success("??? Use same password");
    //   } else {
    //     toastr.success("???? Password Matched");
    //   }
    // },

    async submit() {
      this.$refs.observer.validate();
      try {
        const payload = {
          name: this.name,
          email: this.email,
          password: this.password,
        };
        if (this.password == this.confirmPassword) {
          const result = await APIService.rawPost(
            "/authaccount/registration",
            payload
          );
          if (result.data.code === 1) return toastr.error(result.data.message);
          toastr.success(result.data.message);
          console.log(result);
          this.$router.push(RouteEnum.LOGIN);
        }
        else{
          toastr.error("Password doesn't matched...");
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
