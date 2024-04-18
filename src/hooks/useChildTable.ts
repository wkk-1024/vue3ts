// 定义类型
import {type TableItems} from "@/types";
import {getTableList} from "@/api/childList";

export default () => {
    // 定义表格类型
    const tableList = ref<TableItems>([])

    //获取表格数据
    const getTable = async () => {
        const {data} = await getTableList()
        tableList.value = data.data
    }
    onMounted(() => {
        getTable()
    })

    // 根据id删除指定表格
    const delTableItem = (id) => {
        tableList.value = tableList.value.filter((item) => item.id !== id)
    }
    return {tableList, getTable,delTableItem}
}
