module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-react"
  ],
  plugins: [
    "@babel/plugin-transform-runtime",
    "@babel/plugin-syntax-dynamic-import",
  ],
  env: {
    production: {
      only: ["src"],
      plugins: [
        [
          "transform-react-remove-prop-types",
          {
            removeImport: true
          }
        ],
        "@babel/plugin-transform-react-inline-elements",
        "@babel/plugin-transform-react-constant-elements",
        [
          "babel-plugin-transform-imports",
          {
            "@material-ui/core": {
              "transform": "@material-ui/core/esm/${member}",
              "preventFullImport": true
            },
            "@material-ui/icons": {
              "transform": "@material-ui/icons/esm/${member}",
              "preventFullImport": true
            }
          }
        ]
      ]
    }
  }
};