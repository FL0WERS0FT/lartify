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
                  ></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field
                    label="E-Mail"
                    v-model="email"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field
                    label="Password"
                    v-model="password"
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
export default class Home extends Vue {
  protected showPassword: boolean = false;
  protected username: string = "";
  protected email: string = "";
  protected password: string = "";
  protected repeatPassword: string = "";

  protected register() {
    axios.post("/api/v1/register", {
        name: this.username,
        email: this.email,
        password: this.password
    }).then(response => {
        this.$store.token = response.data.token;
    });
  }
}
</script>
