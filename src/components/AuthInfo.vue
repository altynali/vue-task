<template>
  <v-card>
    <v-card-text>
      <v-row>
        <v-col cols="12" md="3">
          <p>Auth Info:</p>
        </v-col>
        <v-col cols="12" md="6">
          <v-btn @click="showPasswordDialog = true" color='primary'>Show</v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="3">
          <p>Expires at:</p>
        </v-col>
        <v-col cols="12" md="6">
          <div>{{ new Date(expiresAt).toDateString() }}</div>
        </v-col>
      </v-row>

      <v-dialog v-model="showPasswordDialog" max-width="500">
        <v-card>
          <v-card-title class="headline">Secret Password</v-card-title>
          <v-card-text>{{ secretPassword }}</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="showPasswordDialog = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ['expiresAt'],
  data() {
    return {
      showPasswordDialog: false,
      secretPassword: 'your-secret-password'
    };
  },
  methods: {
    showAuthInfo() {
      this.authInfoVisible = true;
    }
  }
};
</script>

<!-- <template>
  <v-card>
    <v-card-title>Auth Info</v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="12" md="6">
          Expires at: {{ expiresAt }}
        </v-col>
        <v-col cols="12" md="6">
          <v-btn @click="showPasswordDialog = true">Show</v-btn>
        </v-col>
      </v-row>
    </v-card-text>
    
    <v-dialog v-model="showPasswordDialog" max-width="500">
      <v-card>
        <v-card-title class="headline">Secret Password</v-card-title>
        <v-card-text>{{ secretPassword }}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="showPasswordDialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
export default {
  props: {
    expiresAt: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      showPasswordDialog: false,
      secretPassword: 'your-secret-password' // Replace with actual secret password
    };
  }
};
</script> -->
