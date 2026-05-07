import antfu from '@antfu/eslint-config'

export default antfu({
  nextjs: true,
  react: true,
  ignores: [
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ],
})
