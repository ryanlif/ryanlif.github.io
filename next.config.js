// const withOffline = require('next-offline');

const nextConfig = {
	output: 'export',
	poweredByHeader: false,
	swcMinify: true,
  	reactStrictMode: true,
	images: {
		unoptimized: true,
	},
};

// module.exports = withOffline(nextConfig);
module.exports = nextConfig;

