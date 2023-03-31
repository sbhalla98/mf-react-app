const { addWebpackModuleRule, override, overrideDevServer, watchAll,addWebpackPlugin } = require('customize-cra');
const path = require('path');
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  webpack: override(
    addWebpackModuleRule({
		test: /\.css$/,
		use: [
		  {
			loader: "css-loader",
			options: {
				esModule: true,
				modules: {
					exportLocalsConvention: 'asIs',
					localIdentName: "[local]--[hash:base64:5]",
				}
			},
		  },
		],
	  }),
    addWebpackPlugin(
      new ModuleFederationPlugin({
        name: 'remote',
        filename: "app.js",
        remotes: {
            remote: "remote@https://react-mf-remote.vercel.app/app.js"
        },
        // shared: {
        //     ...dependencies,
        //     react: {
        //         eager: true,
        //       },
        //   }
        // , shared: {
        //     ...dependencies,
        //     // react: {
        //     //   singleton: true,
        //     //   requiredVersion: dependencies["react"],
        //     // },
        //     // "react-dom": {
        //     //   singleton: true,
        //     //   requiredVersion: dependencies["react-dom"],
        //     // },
        //   },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    })
    )),
  //),
    // devServer : overrideDevServer(
    //   port= "8081"
    // )

}