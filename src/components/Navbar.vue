<template>
    <nav>
        <v-app-bar app>
            <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light">Todo</span>
                <span>App</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>

            <!-- dropwown menu  -->
            <div class="text-center">
                <v-menu offset-y>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                            plain
                            color="grey"
                            text
                            v-bind="attrs"
                            v-on="on"
                        >
                            <v-icon left>
                                expand_more
                            </v-icon>
                            <span>
                                Menu
                            </span>
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item
                            v-for="link in links"
                            :key="link.text"
                            router 
                            :to="`${ link.route }`"
                            color="primary"
                        >
                            <v-icon left>
                                {{ link.icon }}
                            </v-icon>
                            <v-list-item-title>
                                {{ link.text }}
                            </v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </div>

            <v-btn plain color="grey">
                <span>Sign Out</span>
                <v-icon right> exit_to_app </v-icon>
            </v-btn>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" app class="primary">
            <v-layout column align-center>
                <v-flex class="mt-5" >
                    <v-avatar size="100" >
                        <img src="/avatar-1.png" alt="">
                    </v-avatar>
                    <p class="white--text subheading mt-1">
                        The Net Ninja
                    </p>
                </v-flex>
                <v-flex class="mt-4 mb-5">
                    <Dialog />
                </v-flex>
            </v-layout>
            <v-list>
                <v-list-item 
                    v-for="link in links" 
                    :key="link.text" 
                    router :to="link.route"
                >
                    <v-list-item-action>
                        <v-icon class="white--text">
                            {{ link.icon }}
                        </v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title class="white--text">
                            {{ link.text }}
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
import Dialog from './Popup.vue'

export default {
    components: {
        Dialog
    },
    data(){
        return{
            drawer: false,
            links: [
                { icon: 'dashboard', text: 'Dashboard', route: '/'},   
                { icon: 'folder', text: 'My Projects', route: '/projects'},   
                { icon: 'person', text: 'Team', route: '/team'}   
            ]
        }
    }

}
</script>

<style>

</style>