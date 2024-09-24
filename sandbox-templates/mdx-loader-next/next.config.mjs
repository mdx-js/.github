// ⚠️ Important! Please make sure the dependencies are up to date.
// You can refresh them in the Dependencies section (left-bottom on CodeSandbox)

/**
 * @import {Options} from '@mdx-js/loader'
 * @import {NextConfig} from 'next'
 */

/** @type {NextConfig} */
const configuration = {
  // Support MDX files as pages:
  pageExtensions: ['jsx', 'js', 'mdx', 'md', 'tsx', 'ts'],
  // Support loading `.md`, `.mdx`:
  webpack(config, options) {
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        // The default `babel-loader` used by Next:
        options.defaultLoaders.babel,
        {
          loader: '@mdx-js/loader',
          /** @type {Options} */
          options: {}
        }
      ]
    })

    return config
  }
}

export default configuration
