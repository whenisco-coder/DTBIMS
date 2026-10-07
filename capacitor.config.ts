import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.tyrebuddy.businessos',
  appName: 'Tyre Buddy Business OS',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
