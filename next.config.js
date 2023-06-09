/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        addDir: true,
        serverComponentsExternalPackages: ["mongoose"],
    },
    images: {
        domains: ['ih3.googleusercontent.com'],
    },
    webpack(config) {
        config.experiments = {
            ...config.experiments,
            topLevelAwait: true,
        }
        return config
    }
}

module.exports = nextConfig;
