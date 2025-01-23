// https://nuxt.com/docs/api/configuration/nuxt-config
import 'core-js';

export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: {enabled: true},
    build: {
        transpile: ['core-js'], // Transpileer polyfills
        babel: {
            presets({isServer}) {
                return [
                    [
                        require.resolve('@nuxt/babel-preset-app'),
                        {
                            targets: isServer
                                ? {node: 'current'}
                                : {browsers: ['defaults', 'ie 11']}, // Ondersteuning voor oudere browsers
                        },
                    ],
                ];
            },
        },
    },
});