import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

// export const useCounterStore = defineStore('counter', {
//   actions:{
//     add(){
//       this.count++
//     }
//   },
//   state(){
//     return {
//       count:0
//     }
//   },
//   getters:{
//     doubleCount: (state) => state.count * 2
//   }
// })
export const useCounterStore = defineStore('counter', () => {
  console.log(window.localStorage.getItem('counter'))
  const count = ref(window.localStorage.getItem('counter') || 1)
  const doubleCount = computed(() => count.value * 2)

  return { count,doubleCount}
})
