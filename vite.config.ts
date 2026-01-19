import { defineConfig } from 'vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isLib = mode === 'lib'

  const baseConfig = {
    plugins: [
      // Generate TypeScript declarations only for library builds
      isLib && dts({
        tsconfigPath: './tsconfig.app.json',
        rollupTypes: true,
        outDir: 'dist',
        include: ['src/**/*.ts'],
        exclude: ['src/**/__tests__'],
      }),
    ].filter(Boolean),
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      },
    },
    server: {
      host: true
    },
  }

  if (isLib) {
    return {
      ...baseConfig,
      build: {
        lib: {
          entry: {
            index: resolve(__dirname, 'src/index.ts'),
            core: resolve(__dirname, 'src/core/index.ts'),
            higherOrder: resolve(__dirname, 'src/higherOrder/index.ts'),
            collections: resolve(__dirname, 'src/collections/index.ts'),
            objects: resolve(__dirname, 'src/objects/index.ts'),
            validation: resolve(__dirname, 'src/validation/index.ts'),
            underscore: resolve(__dirname, 'src/underscore/index.ts'),
            vue: resolve(__dirname, 'src/vue/index.ts'),
          },
          name: 'PristineFP',
          fileName: (format, entryName) => {
            // For the main index entry, use the package name
            if (entryName === 'index') {
              return `pristine-fp.${format}.js`
            }
            // For subpath entries, place them in subdirectories
            return `${entryName}/index.${format}.js`
          },
          formats: ['es', 'cjs'],
        },
        rollupOptions: {
          // Externalize dependencies that should not be bundled
          external: ['underscore', 'vue'],
          output: {
            globals: {
              underscore: '_',
              vue: 'Vue',
            },
            exports: 'named',
          },
        },
        cssCodeSplit: false,
        sourcemap: true,
        minify: 'terser',
        outDir: 'dist',
        emptyOutDir: true,
      },
    }
  }

  // Default config for dev server (not used)
  return baseConfig
})