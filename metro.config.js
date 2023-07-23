// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

module.exports = getDefaultConfig(__dirname);

const exclusionList = require('metro-config/src/defaults/exclusionList');
module.exports = {
  resolver: {
  blacklistRE: exclusionList([/#current-cloud-backend\/.*/])
}
};
