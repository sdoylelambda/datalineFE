<template>
  <div class="center">
    <section id="content">
      <h2 class="subheader">Contact</h2>

      <form class="mid-form" v-on:submit.prevent="sendForm()">
        <div class="form-group">
          <label for="firstname">First Name</label>
          <input type="text" name="firstname" v-model="user.name" />
          <div v-if="this.submitted && !$v.user.name.required">
            <p>Name is required</p>
          </div>
          <div v-if="this.submitted && !$v.user.name.minLength">
            <p>Minimun character length 3</p>
          </div>
        </div>

        <div class="form-group">
          <label for="lastname">Last Name</label>
          <input type="text" name="lastname" v-model="user.lastname" />
          <div v-if="this.submitted && !$v.user.lastname.required">
            <p>Lastname is required</p>
          </div>
          <div v-if="this.submitted && !$v.user.lastname.minLength">
            <p>Minimun character length 3</p>
          </div>
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input type="text" name="lastname" v-model="user.lastname" />
          <div v-if="this.submitted && !$v.user.lastname.required">
            <p>Email is required</p>
          </div>
          <div v-if="this.submitted && !$v.user.lastname.minLength">
            <p>Minimun character length 3</p>
          </div>
        </div>

        <div class="form-group">
          <label for="phone">Phone</label>
          <input type="text" name="phone" v-model="user.lastname" />
          <div v-if="this.submitted && !$v.user.lastname.required">
            <p>Phone is required</p>
          </div>
          <div v-if="this.submitted && !$v.user.lastname.minLength">
            <p>Minimun character length 3</p>
          </div>
        </div>

           <div class="form-group">
          <label for="subject">Subject</label>
          <input type="text" name="subject" v-model="user.lastname" />
          <div v-if="this.submitted && !$v.user.lastname.required">
            <p>Subject is required</p>
          </div>
          <div v-if="this.submitted && !$v.user.lastname.minLength">
            <p>Minimun character length 3</p>
          </div>
        </div>

        <div class="form-group">
          <label for="message">Message</label>
          <textarea name="email" v-model="user.bio"></textarea>
          <div v-if="this.submitted && !$v.user.bio.required">
            <p>Message is required</p>
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
          Not A Robot
         
        </div>

        <div class="clearfix"></div>

        <input type="submit" value="submit" class="btn btn-success" />
      </form>

      <div v-if="user.name !== ''">
        <p>Name: {{ user.name }}</p>
        <p>Lastname: {{ user.lastname }}</p>
        <p>Bio: {{ user.bio }}</p>
        <p>Gender: {{ user.gender }}</p>
      </div>
    </section>

    <div class="clearfix"></div>
  </div>
</template>

<script>
// Form validation
import { required, minLength } from "vuelidate/lib/validators";

export default {
  name: "FormComponent",
  components: {
 
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