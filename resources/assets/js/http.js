import Vue from 'vue'
import VueResource from 'vue-resource'


export default function useHttp(store) {
    Vue.use(VueResource);

    Vue.http.interceptor.before = function (request) {
        request.headers.set('X-CSRF-TOKEN', store.state.csrf_token);

        return function (response) {
            //перезагрузка если csrf устарел
            if (response.status == 419) {
                document.location.reload(true);
            }
        };
    };
}

// let token = document.head.querySelector('meta[name="csrf-token"]');
// if (token) {
// } else {
//     console.error('CSRF token not found');
// }
