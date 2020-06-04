<template>
  <v-container>
    <v-layout align-center justify-center>
      <v-flex xs6>
        <v-card>
          <v-form>
            <v-container>
              <v-layout wrap>
                <v-flex xs12>
                  <h1>Register</h1>
                </v-flex>
                <v-flex xs12>
                  <v-text-field
                    label="Username"
                    v-model="username"
                    :error="errors['name'] !== undefined"
                    :error-messages="errors['name']"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field
                    label="E-Mail"
                    v-model="email"
                    :error="errors['email'] !== undefined"
                    :error-messages="errors['email']"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field
                    label="Password"
                    v-model="password"
                    :error="errors['password'] !== undefined"
                    :error-messages="errors['password']"
                    :append-icon="showPassword ? 'visibility' : 'visibility_off'"
                    :type="showPassword ? 'text' : 'password'"
                    @click:append="showPassword = !showPassword"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field
                    label="Repeat Password"
                    type="password"
                    :v-model="repeatPassword"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-btn @click="register" block>Register</v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </v-form>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";

@Component({})
export default class Register extends Vue {
  protected showPassword: boolean = false;
  protected username: string = "";
  protected email: string = "";
  protected password: string = "";
  protected repeatPassword: string = "";

  private get errors(){
    return this.$store.state.authModule.errors;
  }

  protected register() {
    axios.post("/api/v1/register", {
        name: this.username,
        email: this.email,
        password: this.password
    }).then(response => {
        this.$store.dispatch('authModule/setToken', response.data.token);
        this.$router.push('dashboard');
    }).catch(errors => {
        if (errors.response) {
            if (errors.response.data) {
                this.$store.dispatch('authModule/setErrors', errors.response.data.errors);
            }
        } else {
            console.log(errors);
        }
    });
  }

  protected destroyed(): void {
    this.$store.dispatch('authModule/setErrors', {});
  }
}
</script>
