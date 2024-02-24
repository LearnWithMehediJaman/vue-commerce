import { reactive, computed } from 'vue';

const cart = reactive({
    items: [],
    totalItems: computed(() => cart.items.length),
    totalPrice: computed(() => cart.items.reduce((total, item) => total + item.price, 0)),
    add(product) {
        cart.items.push(product);
        cart.total += product.price;

        cart.saveDataToLocalStorage();
    },
    remove(product) {
        const index = cart.items.indexOf(product);
        cart.items.splice(index, 1);
        cart.total -= product.price;
    },
    clear() {
        cart.items = [];
        cart.total = 0;
    },
    saveDataToLocalStorage(){
        // 'cart', JSON.stringify(cart)
        localStorage.setItem('cart', JSON.stringify(cart.items));
    },
    getDataFromLocalStorage(){
        const data = localStorage.getItem('cart');
        if(data){
            cart.items = JSON.parse(data);
        }
    }
});

cart.getDataFromLocalStorage();
export { cart }