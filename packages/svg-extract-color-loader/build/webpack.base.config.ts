import type {
  Configuration,
} from 'webpack'
import type {
  Mode,
} from '../types/index'

const mode: Mode = process.env.NODE_ENV as Mode

const webpackBase: Configuration = {
  mode,
  target: 'node',
  module: {
    rules: [
      {
        test: /\.(t|j)s?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-typescript',
              ],
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', 'js'],
  },
  devtool: process.env.NODE_ENV === 'development' ? 'cheap-module-source-map' : false,
}

export default webpackBase
