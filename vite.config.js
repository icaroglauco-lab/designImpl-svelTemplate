import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import {markdown} from 'svelte-preprocess-markdown'
import sveltePreprocess from 'svelte-preprocess'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte({
    // 2. add '.md', to the extensions  
    extensions: ['.svelte','.md'],
    // 3. add markdown preprocessor
    preprocess: [markdown(), sveltePreprocess()]
  })]
})
