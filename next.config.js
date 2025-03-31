const withOffline = require('next-offline');

const nextConfig = {
	poweredByHeader: false,
	swcMinify: true,
  	reactStrictMode: true,
};

module.exports = withOffline(nextConfig);

