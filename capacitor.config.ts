import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.yourname.neondefense',
  appName: 'Neon Defense',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    SplashScreen: {
      launchAutoHide: true,
      launchShowDuration: 1500,
      backgroundColor: '#06080f',
      showSpinner: false,
    },
    StatusBar: {
      style: 'DARK',
      backgroundColor: '#06080f'
    }
  },
  ios: {
    contentInset: 'automatic',
    preferredContentMode: 'mobile',
    scheme: 'Neon Defense'
  },
  android: {
    backgroundColor: '#06080f'
  }
};

export default config;
