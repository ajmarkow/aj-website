// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  devToolbar: { enabled: false },
  image: {
    domains: ['ajm-public-bucket.s3.us-east-1.amazonaws.com'],
  },
  vite: {
    server: {
      allowedHosts: ['overcast-savor-roaming.ngrok-free.dev', '65.18.207.91', '192.168.0.111'],
    },
  },
});
