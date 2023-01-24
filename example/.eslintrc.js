module.exports = {
  root: true,
  extends: '@react-native-community',
  "overrides": [
    {
      "files": ["index.ts"],
      "rules": {
        "no-undef": "off"
      },
    }
  ],
};
