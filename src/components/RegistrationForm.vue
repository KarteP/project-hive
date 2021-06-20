<template>
  <v-container>
    <form>
      <v-text-field
        v-model="name"
        v-validate="'required|min:2|max:100'"
        :counter="100"
        :error-messages="errors.collect('name')"
        label="Name"
        data-vv-name="name"
        required
      ></v-text-field>
      <v-text-field
        v-model="surname"
        v-validate="'required|min:2|max:100'"
        :counter="100"
        :error-messages="errors.collect('surname')"
        label="Surname"
        data-vv-name="surname"
        required
      ></v-text-field>
      <v-text-field
        v-model="email"
        v-validate="'required|email'"
        :error-messages="errors.collect('email')"
        label="E-mail"
        data-vv-name="email"
        required
      ></v-text-field>
      <v-checkbox
        v-model="checkbox"
        v-validate="'required'"
        :error-messages="errors.collect('checkbox')"
        value="1"
        label="I agree to the terms and conditions"
        data-vv-name="checkbox"
        type="checkbox"
        required
      ></v-checkbox>

      <v-btn class="mr-4" @click="submit">register</v-btn>
      <v-btn @click="clear">clear</v-btn>
    </form>
  </v-container>
</template>

<script>
import Vue from "vue";
import VeeValidate from "vee-validate";
import { submitServiceOrder } from "@/firebase.service.js";

Vue.use(VeeValidate);

export default {
  $_veeValidate: {
    validator: "new"
  },

  data: () => ({
    name: "",
    surname: "",
    email: "",
    checkbox: null,
    dictionary: {
      attributes: {
        email: "E-mail Address"
        // custom attributes
      },
      custom: {
        name: {
          required: () => "Name can not be empty"
        },
        surname: {
          required: () => "Surname can not be empty"
        },
      }
    }
  }),

  mounted() {
    this.$validator.localize("en", this.dictionary);
  },

  methods: {
    submit() {
      this.$validator.validateAll();

      submitServiceOrder(
        this.name,
        this.surname,
        this.email,
        this.checkbox
      );

      clear();
    },
    clear() {
      this.name = "";
      this.surname = "";
      this.email = "";
      this.checkbox = null;
      this.$validator.reset();
    }
  }
};
</script>
