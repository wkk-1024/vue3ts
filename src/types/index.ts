// 定义表格类型
export interface TableItem {
    id: number,
    name: string,
    age: number,
    email: string,
    phone: string,
}
export type TableItems = Array<TableItem>

// 定义接口 约束childIndex的类型
export interface ChildIndexInter {
    name: string,
    age: number,
    isYang: boolean,
}

// 定义一个类型含ChildIndexInter属性的数组
//第一种写法
export type ChildIndexType = ChildIndexInter[];

// 第二种写法
// type ChildIndexType = Array<ChildIndexInter>
