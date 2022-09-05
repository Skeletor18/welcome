import os from 'os'
export function userOs(){
    console.log(`Привет, юзер. Вижу ты зашел с ${os.type()}`)
}