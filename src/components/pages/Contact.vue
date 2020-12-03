<template>
  <div class="center">
    <section id="content">
      <h2 class="subheader">Contact</h2>

      <form class="mid-form" v-on:submit.prevent="sendForm()">
        <div class="form-group">
          <label for="firstname">First Name</label>
          <input type="text" name="firstname" v-model="user.firstname" />
          <div v-if="this.submitted && !$v.user.firstname.required">
            <p>First name is required</p>
          </div>
          <div v-if="this.submitted && !$v.user.firstname.minLength">
            <p>Minimum character length 3</p>
          </div>
        </div>

        <div class="form-group">
          <label for="lastname">Last Name</label>
          <input type="text" name="lastname" v-model="user.lastname" />
          <div v-if="this.submitted && !$v.user.lastname.required">
            <p>Last name is required</p>
          </div>
          <div v-if="this.submitted && !$v.user.lastname.minLength">
            <p>Minimum character length 3</p>
          </div>
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input type="text" name="email" v-model="user.email" />
          <div v-if="this.submitted && !$v.user.email.required">
            <p>Email is required</p>
          </div>
          <div v-if="this.submitted && !$v.user.email.minLength">
            <p>Minimum character length 3</p>
          </div>
        </div>

        <div class="form-group">
          <label for="phone">Phone</label>
          <input type="text" name="phone" v-model="user.phone" />
          <div v-if="this.submitted && !$v.user.phone.required">
            <p>Phone is required</p>
          </div>
          <div v-if="this.submitted && !$v.user.phone.minLength">
            <p>Minimum character length 3</p>
          </div>
        </div>

           <div class="form-group">
          <label for="subject">Subject</label>
          <input type="text" name="subject" v-model="user.subject" />
          <div v-if="this.submitted && !$v.user.subject.required">
            <p>Subject is required</p>
          </div>
          <div v-if="this.submitted && !$v.user.subject.minLength">
            <p>Minimum character length 3</p>
          </div>
        </div>

        <div class="form-group">
          <label for="message">Message</label>
          <textarea name="email" v-model="user.message"></textarea>
          <div v-if="this.submitted && !$v.user.message.required">
            <p>Message is required</p>
          </div>
          <div v-if="this.submitted && !$v.user.message.minLength">
            <p>Minimum character length 10</p>
          </div>
        </div>

        <div class="form-group radibuttons">
          <input
            type="checkbox"
          />
          Not A Robot
             <div v-if="this.submitted && !$v.user.checkbox === null">
            <p>Must check box</p>
          </div>
        </div>

        <div class="clearfix"></div>

        <input type="submit" value="submit" class="btn btn-success" />
      </form>

      <div v-if="this.user.message !== ''">
        <p>First Name: {{ user.firstname }}</p>
        <p>Last Name: {{ user.lastname }}</p>
        <p>Email: {{ user.email }}</p>
        <p>Phone: {{ user.phone }}</p>
        <p>Phone: {{ user.subject }}</p>
        <p>Message: {{ user.message }}</p>
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
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      },
      submitted: false,
    };
  },
  validations: {
    user: {
      firstname: {
        required,
        minLength: minLength(3),
      },
      lastname: {
        required,
        minLength: minLength(3),
      },
      message: {
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