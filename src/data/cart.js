import { reactive, computed } from 'vue';

const cart = reactive({
    items: [],
    totalItems: computed(() => cart.items.length),
    totalPrice: computed(() => cart.items.reduce((total, item) => total + item.price, 0)),
    add(product) {
        cart.items.push(product);
        cart.total += product.price;
    },
    remove(product) {
        const index = cart.items.indexOf(product);
        cart.items.splice(index, 1);
        cart.total -= product.price;
    },
    clear() {
        cart.items = [];
        cart.total = 0;
    }
});



export { cart }