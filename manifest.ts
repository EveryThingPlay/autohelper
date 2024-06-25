export default {
  name: 'Autohelper',
  short_name: 'Autohelper',
  description: 'Autohelper - приложение-помощник для автовледельцев',
  display: 'standalone',
  theme_color: '#1D1D1D',
  background_color: '#1D1D1D',
  orientation: 'portrait',
  icons: [
    {
      src: '/pwa-192x192.png',
      sizes: '192x192',
      type: 'image/png',
    },
    {
      src: '/pwa-512x512.png',
      sizes: '512x512',
      type: 'image/png',
      purpose: "maskable"
    }
  ]
}