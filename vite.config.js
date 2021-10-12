import fs from 'fs'
import { resolve } from 'path'
import { defineConfig } from 'vite'
function test (){
    const d =  resolve ("/whoobe-alpha/whoobe-studio/public/img")
    const files = fs.readdirSync ( d )
    console.log ( files )

}
export default defineConfig(({ command, mode }) => {
    server: {
        fs: {
          // Allow serving files from a folder
          allow: [resolve ("/whoobe-alpha/whoobe-studio/public/")]
        }
    }
    
    console.log ( command , mode )
    if (command === 'serve') {
        test()
        return {
            // serve specific config
        }
    } else {
      return {
        // build specific config
      }
    }
  })