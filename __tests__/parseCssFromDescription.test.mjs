import { parseCssFromDescription } from '../bin/functions/process/parseCssFromDescription.mjs';

test('It should throw an error if no parameter is provided', () => {
  expect(() => {
    parseCssFromDescription();
  }).toThrow();
});
