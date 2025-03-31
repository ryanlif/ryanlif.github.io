const withOffline = require('next-offline');

const nextConfig = {
	poweredByHeader: false,
	swcMinify: true,
	output: "export",  // <=== enables static exports
  	reactStrictMode: true,
};

module.exports = withOffline(nextConfig);

