import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'
// https://vite.dev/config/
export default defineConfig(({command,mode})=>{
  const env = loadEnv(mode,process.cwd(),'')
  if(command==='serve'){
    return{
      plugins: [vue()],
      base:'./',
      resolve:{
        alias:[
          {find:'@',replacement:resolve(__dirname,'src')}
        ],
        extensions:['.js','.ts','.json']
      },
      define:{
        _APP_ENV_:env._APP_ENV_
      },
      server:{
        port:9527,
        open:true
      },
    }
  }else{
    return {
      
    }
  }
  
})
