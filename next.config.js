const withOffline = require('next-offline');

const nextConfig = {
	output: "export",  // <=== enables static exports
	basePath: "/ryanlif.github.io",
	poweredByHeader: false,
	swcMinify: true,
  	reactStrictMode: true,
	images: {
    unoptimized: true,},
};

module.exports = withOffline(nextConfig);

