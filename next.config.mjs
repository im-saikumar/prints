/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/webp", "image/avif"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "store4cards.s3.ap-south-1.amazonaws.com/**",
      },
    ],
  },
};

export default nextConfig;
