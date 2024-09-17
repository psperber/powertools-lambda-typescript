import { describe, expect, it } from 'vitest';
import { search } from '../../../src/index.js';

describe('Current operator tests', () => {
  it.each([
    {
      expression: '@',
      expected: {
        foo: [{ name: 'a' }, { name: 'b' }],
        bar: { baz: 'qux' },
      },
    },
    {
      expression: '@.bar',
      expected: { baz: 'qux' },
    },
    {
      expression: '@.foo[0]',
      expected: { name: 'a' },
    },
  ])(
    'should support the current operator: $expression',
    ({ expression, expected }) => {
      // Prepare
      const data = {
        foo: [{ name: 'a' }, { name: 'b' }],
        bar: { baz: 'qux' },
      };

      // Act
      const result = search(expression, data);

      // Assess
      expect(result).toStrictEqual(expected);
    }
  );
});
