import { coverageConfigDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      provider: 'v8',
      thresholds: {
        statements: 100,
        branches: 100,
        functions: 100,
        lines: 100,
      },
      include: ['packages/*/src/**'],
      exclude: [
        ...coverageConfigDefaults.exclude,
        'packages/batch/src/types.ts',
        'packages/commons/src/types/**',
        'packages/event-handler/**',
        'packages/idempotency/**',
        'packages/jmespath/src/types.ts',
        'packages/logger/**',
        'packages/metrics/**',
        'packages/parameters/**',
        'packages/parser/**',
        'packages/testing/**',
        'packages/tracer/**',
      ],
    },
  },
});
