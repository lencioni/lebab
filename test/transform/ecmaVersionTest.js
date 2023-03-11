import createTestHelpers from '../createTestHelpers';
const {expectNoChange} = createTestHelpers([
  'class',
  'template',
  'arrow',
  'let',
  'default-param',
  'arg-spread',
  'obj-method',
  'obj-shorthand',
  'no-strict',
  'commonjs',
  'exponent',
]);

describe('ECMAScript version', () => {
  it('supports optional catch binding in ECMAScript 2019', () => {
    expectNoChange('try { ohNo(); } catch { console.log("error!"); }');
  });
});
