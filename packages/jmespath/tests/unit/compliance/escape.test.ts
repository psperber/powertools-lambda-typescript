import { describe, expect, it } from 'vitest';
import { search } from '../../../src/index.js';

describe('Escape characters tests', () => {
  it.each([
    {
      expression: '"foo.bar"',
      expected: 'dot',
    },
    {
      expression: '"foo bar"',
      expected: 'space',
    },
    {
      expression: '"foo\\nbar"',
      expected: 'newline',
    },
    {
      expression: '"foo\\"bar"',
      expected: 'doublequote',
    },
    {
      expression: '"c:\\\\\\\\windows\\\\path"',
      expected: 'windows',
    },
    {
      expression: '"/unix/path"',
      expected: 'unix',
    },
    {
      expression: '"\\"\\"\\""',
      expected: 'threequotes',
    },
    {
      expression: '"bar"."baz"',
      expected: 'qux',
    },
  ])(
    'should support escaping characters: $expression',
    ({ expression, expected }) => {
      // Prepare
      const data = {
        'foo.bar': 'dot',
        'foo bar': 'space',
        'foo\nbar': 'newline',
        'foo"bar': 'doublequote',
        'c:\\\\windows\\path': 'windows',
        '/unix/path': 'unix',
        '"""': 'threequotes',
        bar: { baz: 'qux' },
      };

      // Act
      const result = search(expression, data);

      // Assess
      expect(result).toStrictEqual(expected);
    }
  );
});
