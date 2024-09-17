/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: false,
    },
    optimizeFonts: false,
    images: {
        domains: [
            "user-images.githubusercontent.com",
            "cdn.hashnode.com",
            "github.com",
            "drive.google.com",
            "raw.githubusercontent.com", // Correctly added this domain
        ],
    },
};

module.exports = nextConfig;