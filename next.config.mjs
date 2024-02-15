/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "bcssrfyaqnyvqtmabmnt.supabase.co",
        port: "",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
