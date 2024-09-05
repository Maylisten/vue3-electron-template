/// <reference types="vite/client" />

interface Window {
  api: {
    test: {
      saveWorld: () => Promise<void>,
      getWorld: () => Promise<string>
    },
  }
}
