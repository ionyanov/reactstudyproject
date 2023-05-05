import react from '@vitejs/plugin-react'
import {defineConfig} from 'vite'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [svgr({exportAsDefault: true}), react()],
    resolve: {
        alias: [{find: '@', replacement: '/src'}]
    },
    define: {
        _IS_DEV_: JSON.stringify(true),
        _API_URL_: JSON.stringify('http://localhost:8000'),
        _PROJECT_: JSON.stringify('frontend')
    }
})
