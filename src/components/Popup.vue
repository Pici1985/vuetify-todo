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
            <v-form class="px-3" ref="form">
              <v-text-field 
                label="Title" 
                v-model="title"
                prepend-icon="folder"
                :rules="inputRulesTitle"
              ></v-text-field>
              <v-textarea 
                label="Information" 
                v-model="content"
                prepend-icon="edit"
                :rules="inputRulesInfo"
              ></v-textarea> 
            <!-- datepicker -->
              <v-row>
                <v-col
                  cols="12"
                  lg="6"
                >
                  <v-menu
                    v-model="menu2"
                    :close-on-content-click="false"
                    max-width="290"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        :value="computedDateFormattedDatefns"
                        prepend-icon="date_range"
                        clearable
                        label="Choose date"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                        @click:clear="date = null"
                        :rules="inputRulesDatefield"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="date"
                      @change="menu2 = false"
                    ></v-date-picker>
                  </v-menu>
                </v-col>
              </v-row>
        <!-- datepicker ends -->
            </v-form>
        </v-card-text>

        <!-- <v-divider></v-divider> -->

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            class="mb-5 mr-3"
            color="primary"            
            @click="submit()"
          >
            Create
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { format, parseISO } from 'date-fns'

export default {
    data(){
        return{
            dialog: false,
            title: '',
            content: '',
            date: format(parseISO(new Date().toISOString()), 'yyyy-MM-dd'),
            menu2: false,
            inputRulesTitle: [
              v => !!v || 'Title is required',
              v => (v && v.length >= 3) || 'Title must be longer than 3 characters',
            ],
            inputRulesInfo: [
              v => !!v || 'Information is required',
              v => (v && v.length >= 3) || 'Information must be longer than 3 characters',
            ],
            inputRulesDatefield: [
              v => !!v || 'Please pick a date',
              // v => v !== null || 'Please pick a date', 
            ],
        }
    },
    methods: {
      submit(){
        // this.$refs.form.validate()
        if(this.$refs.form.validate()){
          this.dialog = false,
          this.loading = true
          console.log(this.title, this.content, this.date)
          this.$refs.form.reset()
        }
      },
    },
    computed: {
      computedDateFormattedDatefns () {
        return this.date ? format(parseISO(this.date), 'EEEE, MMMM do yyyy') : ''
      },
    },
}
</script>

<style>

</style>