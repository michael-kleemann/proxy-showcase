/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      beforeFiles: [],
      afterFiles: [],
      fallback: [
        {
          source: '/proxy-standard-target',
          destination: 'https://proxy-standard-target-git-main-michael-kleemanns-projects.vercel.app/proxy-standard-target',
        },
        {
          source: '/proxy-standard-target',
          destination: 'https://proxy-standard-target-git-main-michael-kleemanns-projects.vercel.app/proxy-standard-target/:path*',
        },
      ],
    };
  },
};

export default nextConfig;
