/** @type {import('next').NextConfig} */

const nextConfig = {
  devIndicators: false,
  sassOptions: {
    additionalData: `@use "styles/variables" as *;`,
    includePaths: ["./styles"],
  },
};

export default nextConfig;
