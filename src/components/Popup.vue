<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="600"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="info"
          v-bind="attrs"
          v-on="on"
        >
          Add Project
        </v-btn>
      </template>

      <v-card>
        <v-card-title>
          <h2 class="primary--text p-5 ma-3">
            Add New Project
          </h2>
        </v-card-title>

        <v-card-text>
            <v-form class="px-3">
              <v-text-field 
                label="Title" 
                v-model="title"
                prepend-icon="folder"
              ></v-text-field>
              <v-textarea 
                label="Information" 
                v-model="content"
                prepend-icon="edit"
              ></v-textarea>    
            </v-form>
        </v-card-text>

        <!-- <v-divider></v-divider> -->

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            class="mb-5 mr-3"
            color="primary"            
            @click="dialog = false, submit()"
          >
            Create
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
    data(){
        return{
            dialog: false,
            title: '',
            content: '',
        }
    },
    methods: {
      submit(){
        console.log(this.title, this.content)
      },
    },
}
</script>

<style>

</style>