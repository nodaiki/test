import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
 
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,            // ← 必須: 0.0.0.0 バインド（ホストモードでもOK）
    port: 5173,
    watch: {
      usePolling: true,    // ← LinuxやDocker上でのファイル変更検知
    },
  },
})