"use client"

import { useEffect, useState } from "react"

const InstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)
  const [showInstallButton, setShowInstallButton] = useState(false)

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e)
      setShowInstallButton(true)
    }

    window.addEventListener("beforeinstallprompt", handler)

    return () => {
      window.removeEventListener("beforeinstallprompt", handler)
    }
  }, [])

  const handleInstallClick = async () => {
    if (!deferredPrompt) return

    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice

    if (outcome === "accepted") {
      setShowInstallButton(false)
    }

    setDeferredPrompt(null)
  }

  if (!showInstallButton) return null

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-blue-600 text-white p-4 rounded-lg shadow-lg max-w-sm">
        <div className="flex items-start gap-3">
          <div className="flex-1">
            <h3 className="font-bold mb-1">Install Dino Game</h3>
            <p className="text-sm text-blue-100">Play offline anytime!</p>
          </div>
          <button
            onClick={handleInstallClick}
            className="bg-white text-blue-600 px-4 py-2 rounded font-semibold hover:bg-blue-50 transition"
          >
            Install
          </button>
          <button
            onClick={() => setShowInstallButton(false)}
            className="text-white hover:text-blue-200"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  )
}

export default InstallPrompt
