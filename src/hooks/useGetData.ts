//使用mitt
import emitter from "@/utils/mitter";
import {ref} from "vue";

export default  () => {

    const getDataEmit = (name,data) => {
        emitter.emit(name,data)
    }
    //绑定
    const getDataOn = (name, callback) => {
        emitter.on(name, (data) => callback(data))
    }

    //清空
    const getDataOnClear = () => emitter.all.clear()

    // emitter.on('get-data', (value: string) => {
    //     text.value = value
    // })

    return {getDataOn,getDataOnClear,getDataEmit}
}
