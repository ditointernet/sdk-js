module.exports = {
  env: {
    node: true
  },
  extends: ["airbnb-base"],
  rules: {
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: ["test/**/*.js"]
      }
    ],
    "arrow-parens": "off",
    "import/prefer-default-export": "off"
  }
};
