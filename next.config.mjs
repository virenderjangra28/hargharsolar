/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  async rewrites() {
    return [
      {
        source: "/rooftop-solar-:city",
        destination: "/rooftop-solar/:city",
      },
    ];
  },
};

export default nextConfig;
