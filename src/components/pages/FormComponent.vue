<template>
  <div class="center">
    <section id="content">
      <h2 class="subheader">Formulario</h2>

      <form class="mid-form" v-on:submit.prevent="sendForm()">
        <div class="form-group">
          <label for="nombre">Nombre</label>
          <input type="text" name="nombre" v-model="user.name" />
          <div v-if="this.submitted && !$v.user.name.required">
            <p>Name is required</p>
          </div>
          <div v-if="this.submitted && !$v.user.name.minLength">
            <p>Minimun character length 3</p>
          </div>
        </div>

        <div class="form-group">
          <label for="apellidos">Apellidos</label>
          <input type="text" name="apellidos" v-model="user.lastname" />
          <div v-if="this.submitted && !$v.user.lastname.required">
            <p>Lastname is required</p>
          </div>
          <div v-if="this.submitted && !$v.user.lastname.minLength">
            <p>Minimun character length 3</p>
          </div>
        </div>

        <div class="form-group">
          <label for="bio">Biografia</label>
          <textarea name="bio" v-model="user.bio"></textarea>
          <div v-if="this.submitted && !$v.user.bio.required">
            <p>Bio is required</p>
          </div>
          <div v-if="this.submitted && !$v.user.bio.minLength">
            <p>Minimun character length 10</p>
          </div>
        </div>

        <div class="form-group radibuttons">
          <input
            type="radio"
            name="genero"
            value="hombre"
            v-model="user.gender"
          />
          Hombre
          <input
            type="radio"
            name="genero"
            value="mujer"
            v-model="user.gender"
          />
          Mujer
          <input
            type="radio"
            name="genero"
            value="otro"
            v-model="user.gender"
          />
          Otro
        </div>

        <div class="clearfix"></div>

        <input type="submit" value="Enviar" class="btn btn-success" />
      </form>

      <div v-if="user.name !== ''">
        <p>Name: {{ user.name }}</p>
        <p>Lastname: {{ user.lastname }}</p>
        <p>Bio: {{ user.bio }}</p>
        <p>Gender: {{ user.gender }}</p>
      </div>
    </section>

    <SidebarComponent />
    <div class="clearfix"></div>
  </div>
</template>

<script>
// Form validation
import { required, minLength } from "vuelidate/lib/validators";
// Child components
import SidebarComponent from "../reuse/SidebarComponent.vue";

export default {
  name: "FormComponent",
  components: {
    SidebarComponent,
  },
  data() {
    return {
      user: {
        name: "",
        lastname: "",
        bio: "",
        gender: "",
      },
      submitted: false,
    };
  },
  validations: {
    user: {
      name: {
        required,
        minLength: minLength(3),
      },
      lastname: {
        required,
        minLength: minLength(3),
      },
      bio: {
        required,
        minLength: minLength(10),
      },
    },
  },
  methods: {
    sendForm: function () {
      this.submitted = true;

      this.$v.$touch();
      if (this.$v.$invalid) {
        return false;
      } else {
        alert("Form submitted");
      }
    },
  },
};
</script>

<style>
</style>