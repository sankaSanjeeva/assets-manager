export default {
  'src/**/*.ts?(x)': () => 'tsc -p tsconfig.json --noEmit',
  'src/**/*.{js,jsx,ts,tsx}': 'eslint',
};
