import {useCounterStore} from '@/stores/counter'
import {storeToRefs} from "pinia";

// 导出箭头函数
export default () => {
    //解构响应式数据
    const counterStore = useCounterStore()

    const {count, doubleCount} = storeToRefs(counterStore)

    // 修改store中的数据
    const increment = () => {
        // 第一种写法
        count.value++

        // 第二种写法
        // counterStore.$patch({
        //   count:counterStore.count += 1
        // })

        // 第三种写法
        // useCounterStore().add()

    }
    return {counterStore, increment,doubleCount,count}
}
