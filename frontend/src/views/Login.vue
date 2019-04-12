<template>
  <v-container>
    <v-layout align-center justify-center>
      <v-flex xs6>
        <v-card>
          <v-form>
            <v-container>
              <v-layout wrap>
                <v-flex xs12>
                    <h1>Login</h1>
                </v-flex>
                <v-flex xs12>
                  <v-text-field label="Username"></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field
                    label="Password"
                    :append-icon="showPassword ? 'visibility' : 'visibility_off'"
                    :type="showPassword ? 'text' : 'password'"
                    @click:append="showPassword = !showPassword"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-btn block>Login</v-btn>
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

@Component({})
export default class Home extends Vue {
  protected showPassword: boolean = false;
}
</script>
