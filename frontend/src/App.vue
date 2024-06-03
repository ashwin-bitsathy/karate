<template>
  <div class="container">
    <form>
      <div class="form-group">
        <label for="scenario">Scenario:</label>
        <input @change="generateFeatureFile()" type="text" class="form-control" id="scenario" v-model="scenario">
      </div>
      <div class="form-group">
        <label for="filename">Filename:</label>
        <input @input="generateFeatureFile()" type="text" class="form-control" id="filename" v-model="filename">
      </div>
      <div class="form-group">
        <label for="url">URL:</label>
        <input @input="generateFeatureFile()" type="text" class="form-control" id="url" v-model="url">
      </div>
      <div class="form-group">
        <label for="path">Path:</label>
        <input @input="generateFeatureFile()" type="text" class="form-control" id="path" v-model="path">
      </div>
      <div class="form-group">
        <label for="request">Request:</label>
        <textarea @input="generateFeatureFile()" class="form-control" id="request" v-model="request"></textarea>
      </div>
      <div class="form-group">
        <label for="method">Method:</label>
        <select @change="generateFeatureFile()" class="form-control" id="method" v-model="method">
          <option value="get">GET</option>
          <option value="post">POST</option>
          <option value="put">PUT</option>
          <option value="delete">DELETE</option>
        </select>
      </div>
      <div class="form-group">
        <label for="status">Status:</label>
        <select  @change="generateFeatureFile()" class="form-control" id="method" v-model="status">
          <option value="401">401</option>
          <option value="200">400</option>
          <option value="400">400</option>
          <option value="500">500</option>
        </select>
      </div>
      <div class="form-group">
        <label for="response">Response:</label>
        <textarea @input="generateFeatureFile()" class="form-control" id="response" v-model="response"></textarea>
      </div>
    </form>
    <div v-if="featureFile">
      <h4>Generated Feature File:</h4>
      <VueCodemirror :disabled="true" v-model="featureFile"></VueCodemirror>
    </div>
    <div>
      <Button @click="save(

      )">Save</Button>
    </div>
  </div>
</template>

<script>
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.js';
import { defineComponent } from 'vue';
const fs = require('fs');

export default defineComponent({ 
  data() {
    return {
      url: window.location.href,
      path: '',
      request: '',
      method: 'get',
      status: '',
      response: '',
      featureFile: '',
      filename: '',
      scenario: ''
    };
  },
  components: {
  },
  methods: {
    generateFeatureFile() {
      // Code to generate feature file goes here

      this.featureFile = `Feature: ${this.filename}\n`
      if(this.scenario) {
        this.featureFile = `${this.featureFile} Scenario: ${this.scenario}\n`
      }
      if(this.url) {
        this.featureFile = `${this.featureFile} * url ${this.url}\n`
      }
      if(this.path) {
        this.featureFile = `${this.featureFile} * path ${this.path}\n`
      }
      if(this.request) {
        this.featureFile = `${this.featureFile} * request ${this.request}\n`
      }
      if(this.method) {
        this.featureFile = `${this.featureFile} * method ${this.method}\n`
      }
      if(this.status) {
        this.featureFile = `${this.featureFile} * status ${this.status}\n`
      }
      if(this.response) {
        this.featureFile = `${this.featureFile} * response ${this.response}\n`
      }
    },
    save() {

fs.writeFile(`karate/${this.filename || new Date().toISOString()}.feature`, this.featureFile, (err) => {
  if (err) throw err;
  console.log('Feature file has been created successfully.');
});
    }
  }
});
</script>

<style>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  font-weight: bold;
}

textarea {
  height: 150px;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
}

.btn-primary:hover {
  background-color: #0069d9;
  border-color: #0062cc;
}

.btn-primary:focus {
  box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
}

pre {
  white-space: pre-wrap;
}
</style>
