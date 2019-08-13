const rewireReactHotLoader = require('react-app-rewire-hot-loader-for-customize-cra');
const { override } = require('customize-cra');

module.exports = override(rewireReactHotLoader());
