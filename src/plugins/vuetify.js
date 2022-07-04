import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

//ez mukodott 

// Vue.use(Vuetify, {
//     iconfont: 'md',
//     theme: {
//         primary: '#9652ff',
//         success: '#3cd1c2',
//         info: '#ffaa2c',
//         error: '#f83e70',
//     }
// });

// export default new Vuetify({
// });

// ez vagy fog vagy nem 
Vue.use(Vuetify)

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#9652ff',
                success: '#3cd1c2',
                info: '#ffaa2c',
                error: '#f83e70'
            }
        }
    } 
})

