const AxeBuilder = require('@axe-core/playwright').default;

async function runAxe(page) {
  return await new AxeBuilder({ page }).analyze();
}

module.exports = {
  runAxe,
};