import {ref, computed, watch, reactive} from 'vue';
import{ defineStore} from 'pinia';
export const globalInput = defineStore('global', () =>{
    const showDetail = ref(false);
    const idForDetail = ref(0);
  
    return {showDetail, idForDetail};
})