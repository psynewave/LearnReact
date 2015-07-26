var path = require("path");
    assets_path = path.join("app", "assets", "javascripts");

module.exports = {
    entry: "./app/assets/frontend/home.js.jsx",
    output: {
        path: assets_path,
        filename: "scripts/bundle.js"
    },
    resolve: {
      extensions: ['','.js','.jsx'],
      path: __dirname
    },
    module: {
        loaders: [
            { test: /\.jsx$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    }
};
