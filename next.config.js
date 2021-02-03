module.exports = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./utils/generateSitemap')
    }

    return config
  }
}