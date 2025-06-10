/** @type {import('next').NextConfig} */

const nextConfig = {
  devIndicators: false,
  sassOptions: {
    additionalData: `@use "styles/globals" as *;`,
    includePaths: ["./"],
  },
};

export default nextConfig;
