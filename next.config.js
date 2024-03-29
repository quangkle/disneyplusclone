/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "upload.wikimedia.org"
            },
            {
                protocol: "http",
                hostname: "image.tmdb.org"
            },
        ],
    }
}

module.exports = nextConfig
