import React from 'react'
import Spline from '@splinetool/react-spline'

function App() {
  return (
    <div className="min-h-screen w-full bg-white text-gray-900">
      {/* Hero Section with Spline cover */}
      <section className="relative h-[100svh] w-full overflow-hidden">
        {/* Spline 3D Cover */}
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>

        {/* Subtle gradient overlay for readability (doesn't block interactions) */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/60 dark:from-white/40 dark:via-white/20 dark:to-white/50" />

        {/* Content */}
        <div className="relative z-10 h-full w-full flex items-center">
          <div className="mx-auto max-w-6xl px-6 sm:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur-md px-3 py-1 text-xs font-medium text-gray-700 shadow-sm ring-1 ring-black/5 mb-4">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
                Trusted by thousands of brands
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-gray-900">
                Kimp — your all‑in‑one design team for graphics and video.
              </h1>

              <p className="mt-5 text-lg sm:text-xl text-gray-700 max-w-2xl">
                One flat monthly fee. Unlimited requests. Unlimited revisions. No contracts. Get stunning visuals fast — in just 24 hours for graphics, and every few days for video.
              </p>

              <p className="mt-3 text-base sm:text-lg text-gray-600">
                Ready to scale your creative output without exploding your budget? Sign up in two minutes — cancel anytime.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <a href="#" className="inline-flex items-center justify-center rounded-lg bg-gray-900 text-white px-5 py-3 text-sm sm:text-base font-semibold shadow-md hover:shadow-lg transition-shadow">
                  Start now
                </a>
                <a href="#plans" className="inline-flex items-center justify-center rounded-lg bg-white/80 backdrop-blur-md text-gray-900 px-5 py-3 text-sm sm:text-base font-semibold shadow ring-1 ring-black/10 hover:bg-white">
                  See plans
                </a>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-600">
                <span>• 24-hour turnaround for graphics</span>
                <span>• Pro video editing</span>
                <span>• Unlimited revisions</span>
                <span>• Flat monthly fee</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple placeholder section for below-the-fold content */}
      <section id="plans" className="relative w-full bg-white">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 py-16 sm:py-24">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Transparent, flat-rate pricing</h2>
          <p className="mt-3 text-gray-600 max-w-3xl">
            Pick a plan that fits your team. Scale up or pause anytime. No contracts.
          </p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Graphics</h3>
              <p className="mt-2 text-sm text-gray-600">Unlimited graphic design with next‑day delivery.</p>
              <button className="mt-6 w-full rounded-lg bg-gray-900 text-white px-4 py-2 font-medium hover:bg-black">Choose</button>
            </div>
            <div className="rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Video</h3>
              <p className="mt-2 text-sm text-gray-600">Unlimited video editing with deliveries every few days.</p>
              <button className="mt-6 w-full rounded-lg bg-gray-900 text-white px-4 py-2 font-medium hover:bg-black">Choose</button>
            </div>
            <div className="rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Graphics + Video</h3>
              <p className="mt-2 text-sm text-gray-600">Everything in one flat monthly subscription.</p>
              <button className="mt-6 w-full rounded-lg bg-gray-900 text-white px-4 py-2 font-medium hover:bg-black">Choose</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
