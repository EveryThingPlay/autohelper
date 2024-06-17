import { defineStore } from 'pinia';
import router from '../router'
// @ts-ignore
import { fetchWrapper } from '../helpers';
import { ref } from 'vue';

const baseUrl = `${import.meta.env.VITE_API_URL}/users`;

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        // initialize state from local storage to enable user to stay logged in
        user: JSON.parse(String(localStorage.getItem('user'))),
        returnUrl: null
    }),
    actions: {
        async login(username:string, password:string) {
            const user = await fetchWrapper.post(`${baseUrl}/authenticate`, { username, password });

            // update pinia state
            this.user = user;

            // store user details and jwt in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));

            // redirect to previous url or default to home page
            router.push(this.returnUrl || '/');
        },
        logout() {
            this.user = null;
            localStorage.removeItem('user');
            router.push('/login');
        }
    }
});

export const useInvoiceStore = defineStore('invoice', ()=>{
    const title = ref<string>('')
    const cost = ref<number>(0)
    const date = ref<Date|undefined>()
    const comment = ref<string>('')
    const mileage = ref<number>(0)

    return { title, cost, date, comment, mileage }
})