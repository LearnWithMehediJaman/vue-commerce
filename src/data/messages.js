import { reactive } from 'vue';

const messages = reactive({
    list: [],
    add(message) {
        messages.list.push(message);
    }
});

export { messages }