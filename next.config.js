/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'lh3.googleusercontent.com',
            'images.unsplash.com',
            'unsplash.com',
            'plus.unsplash.com'
        ],
    },
    eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
