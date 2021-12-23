const path = require('path');
import react from '@vitejs/plugin-react';

export default ({ command }) => ({
    base: command === 'serve' ? '' : '/build/',
    publicDir: 'fake_dir_so_nothing_gets_copied',
    server: {
        port: 3000,
				host: '0.0.0.0'
    },
    build: {
        manifest: true,
        outDir: 'public/build',
        rollupOptions: {
            input: {
                home: 'resources/js/home/main.tsx',
                auth: 'resources/js/auth/main.tsx',
            }
        },
        sourcemap: true
    },
    resolve: {
        alias: [
            {find: "@", replacement: path.resolve(__dirname, 'resources/js')}
        ],
    },
    define: {
        global: 'window'
    },
    plugins: [react()]
});