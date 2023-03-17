import { defineStore } from "pinia";

interface Token {
  token:string
  name:string
  age:string
}
export const myToken = defineStore('mytoken', () => {
  const myToken = ref('')

  const token = computed<Token>(() => {
    try {
      return JSON.parse(myToken.value || window.localStorage.getItem('tokenInfo') || '{}')
    } catch (error) {
      ElMessage.error('token错误')
      // 清空token
      window.localStorage.setItem('tokenInfo','')
      throw error
    }
  })

  function saveToken(data: string) {
    myToken.value = data
    // 保存token信息
    window.localStorage.setItem('tokenInfo',data)
  }

  return { token, saveToken }
})