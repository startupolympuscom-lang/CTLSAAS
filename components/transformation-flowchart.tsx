"use client"

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react"
import type { LucideIcon } from "lucide-react"
import { Expand, Minimize2, Minus, Move, Plus, ScanSearch } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export type FlowchartItem = {
  heading?: string
  text: string
  icon: LucideIcon
}

export type FlowchartPhase = {
  id: number
  title: string
  items: FlowchartItem[]
  highlight?: boolean
}

const controlsCopy = {
  en: {
    zoomIn: "Zoom in",
    zoomOut: "Zoom out",
    fit: "Fit to screen",
    fullscreen: "Full screen",
    exitFullscreen: "Exit full screen",
    hint: "Use the buttons or Ctrl + scroll to zoom. Drag to move around when zoomed in.",
    phase: "Phase",
    label: "Digital transformation process flowchart",
  },
  fr: {
    zoomIn: "Zoom avant",
    zoomOut: "Zoom arrière",
    fit: "Ajuster à l'écran",
    fullscreen: "Plein écran",
    exitFullscreen: "Quitter le plein écran",
    hint: "Utilisez les boutons ou Ctrl + molette pour zoomer. Faites glisser pour vous déplacer une fois zoomé.",
    phase: "Phase",
    label: "Organigramme du processus de transformation numérique",
  },
  ar: {
    zoomIn: "تكبير",
    zoomOut: "تصغير",
    fit: "ملاءمة الشاشة",
    fullscreen: "ملء الشاشة",
    exitFullscreen: "إنهاء ملء الشاشة",
    hint: "استخدم الأزرار أو Ctrl + عجلة الفأرة للتكبير. اسحب للتنقل عند التكبير.",
    phase: "المرحلة",
    label: "مخطط عملية التحول الرقمي",
  },
} as const

const MAX_SCALE = 2
const ZOOM_STEP = 1.25

/** Splits "→ a\n→ b" style content into clean lines. */
function toLines(text: string) {
  return text
    .split("\n")
    .map((line) => line.replace(/^\s*[→←]\s*/, "").trim())
    .filter(Boolean)
}

function ItemBody({ item }: { item: FlowchartItem }) {
  const lines = toLines(item.text)
  const Icon = item.icon
  const icon = (
    <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-moroccan-teal/10 text-teal-700">
      <Icon className="h-4 w-4" aria-hidden="true" />
    </span>
  )
  if (!item.heading) {
    return (
      <div className="flex items-center gap-3 rounded-xl border border-moroccan-charcoal/10 bg-white p-3.5 shadow-sm">
        {icon}
        <p className="text-[15px] font-medium leading-snug text-moroccan-charcoal">{lines.join(" ")}</p>
      </div>
    )
  }
  return (
    <div className="rounded-xl border border-moroccan-charcoal/10 bg-white p-4 shadow-sm">
      <div className="flex items-start gap-2.5">
        {icon}
        <h4 className="pt-0.5 text-[15px] font-semibold leading-snug text-moroccan-charcoal">{item.heading}</h4>
      </div>
      {lines.length === 1 ? (
        <p className="mt-2 text-[14px] leading-relaxed text-gray-600">{lines[0]}</p>
      ) : (
        <ul className="mt-2 space-y-1.5">
          {lines.map((line) => (
            <li key={line} className="flex gap-2 text-[14px] leading-relaxed text-gray-600">
              <span className="mt-[9px] h-1 w-1 flex-shrink-0 rounded-full bg-moroccan-charcoal/40" aria-hidden="true" />
              {line}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

/** The full horizontal diagram, rendered at its natural size and scaled by the parent. */
function Diagram({ phases, phaseLabel }: { phases: FlowchartPhase[]; phaseLabel: string }) {
  return (
    <div className="relative w-max p-8">
      {/* Track connecting every phase node */}
      <div className="absolute inset-x-[calc(2rem+120px)] top-[calc(2rem+24px)] h-0.5 bg-moroccan-charcoal/15" aria-hidden="true" />

      <ol className="relative flex gap-6">
        {phases.map((phase) => (
          <li key={phase.id} className="flex w-[240px] flex-col">
            {/* Node */}
            <div className="flex justify-center">
              <span
                className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full font-display text-lg font-bold ring-8 ring-white ${
                  phase.highlight ? "bg-moroccan-yellow text-moroccan-charcoal" : "bg-moroccan-charcoal text-white"
                }`}
              >
                {phase.id}
              </span>
            </div>

            {/* Phase title */}
            <div
              className={`mt-5 flex h-[88px] flex-col items-center justify-center rounded-2xl px-4 text-center ${
                phase.highlight ? "bg-moroccan-yellow text-moroccan-charcoal" : "bg-moroccan-charcoal text-white"
              }`}
            >
              <span
                className={`text-[11px] font-bold uppercase tracking-widest ${
                  phase.highlight ? "text-moroccan-charcoal/60" : "text-white/50"
                }`}
              >
                {phaseLabel} {phase.id}
              </span>
              <span className="mt-1 font-display text-[17px] font-bold leading-tight">{phase.title}</span>
            </div>

            {/* Steps */}
            <div className="relative mt-4 flex flex-col gap-3 ps-0">
              <div className="absolute bottom-6 start-1/2 top-0 w-px -translate-x-1/2 bg-moroccan-charcoal/15 rtl:translate-x-1/2" aria-hidden="true" />
              {phase.items.map((item, index) => (
                <div key={index} className="relative">
                  <ItemBody item={item} />
                </div>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}

/** Vertical timeline used on small screens, where a scaled diagram would be unreadable. */
function MobileTimeline({ phases, phaseLabel }: { phases: FlowchartPhase[]; phaseLabel: string }) {
  return (
    <ol className="relative space-y-8">
      <div className="absolute bottom-0 start-5 top-0 w-0.5 bg-moroccan-charcoal/10" aria-hidden="true" />
      {phases.map((phase) => (
        <li key={phase.id} className="relative ps-14">
          <span
            className={`absolute start-0 top-0 flex h-10 w-10 items-center justify-center rounded-full font-display font-bold ring-4 ring-white ${
              phase.highlight ? "bg-moroccan-yellow text-moroccan-charcoal" : "bg-moroccan-charcoal text-white"
            }`}
          >
            {phase.id}
          </span>
          <p className="text-[11px] font-bold uppercase tracking-widest text-gray-500">
            {phaseLabel} {phase.id}
          </p>
          <h3 className="font-display text-lg font-bold text-moroccan-charcoal">{phase.title}</h3>
          <div className="mt-3 space-y-3">
            {phase.items.map((item, index) => (
              <ItemBody key={index} item={item} />
            ))}
          </div>
        </li>
      ))}
    </ol>
  )
}

export function TransformationFlowchart({ phases }: { phases: FlowchartPhase[] }) {
  const { language } = useLanguage()
  const copy = controlsCopy[language] ?? controlsCopy.fr

  const frameRef = useRef<HTMLDivElement>(null)
  const viewportRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const [natural, setNatural] = useState({ w: 0, h: 0 })
  const [available, setAvailable] = useState({ w: 0, h: 0 })
  const [zoom, setZoom] = useState<number | null>(null) // null = fit to screen
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [dragging, setDragging] = useState(false)
  const anchor = useRef<{ x: number; y: number; px: number; py: number } | null>(null)
  const drag = useRef<{ x: number; y: number; left: number; top: number } | null>(null)

  // Measure the diagram's natural size.
  useLayoutEffect(() => {
    const el = contentRef.current
    if (!el) return
    const update = () => setNatural({ w: el.offsetWidth, h: el.offsetHeight })
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [phases])

  // Measure the space available for it.
  useLayoutEffect(() => {
    const el = frameRef.current
    if (!el) return
    const update = () => {
      const vp = viewportRef.current
      const width = vp ? vp.clientWidth : el.clientWidth
      // In full screen, also fit the height (minus the toolbar).
      const height = document.fullscreenElement === el ? el.clientHeight - 72 : Number.POSITIVE_INFINITY
      setAvailable({ w: width, h: height })
    }
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [isFullscreen])

  const fit =
    natural.w && available.w ? Math.min(1, available.w / natural.w, available.h / natural.h) : 1
  const scale = zoom ?? fit
  const minScale = Math.min(fit, 1)
  const isZoomed = scale > fit + 0.001

  // Keep the point under the cursor (or the centre) steady while zooming.
  const applyZoom = useCallback(
    (next: number, clientX?: number, clientY?: number) => {
      const vp = viewportRef.current
      const clamped = Math.min(MAX_SCALE, Math.max(minScale, next))
      if (vp) {
        const rect = vp.getBoundingClientRect()
        const px = clientX !== undefined ? clientX - rect.left : vp.clientWidth / 2
        const py = clientY !== undefined ? clientY - rect.top : vp.clientHeight / 2
        anchor.current = {
          x: (vp.scrollLeft + px) / scale,
          y: (vp.scrollTop + py) / scale,
          px,
          py,
        }
      }
      setZoom(clamped <= fit + 0.001 ? null : clamped)
    },
    [fit, minScale, scale],
  )

  useLayoutEffect(() => {
    const vp = viewportRef.current
    const a = anchor.current
    if (!vp || !a) return
    vp.scrollLeft = a.x * scale - a.px
    vp.scrollTop = a.y * scale - a.py
    anchor.current = null
  }, [scale])

  // Ctrl/Cmd + wheel (and trackpad pinch) zooms the diagram instead of the page.
  useEffect(() => {
    const vp = viewportRef.current
    if (!vp) return
    const onWheel = (e: WheelEvent) => {
      if (!e.ctrlKey && !e.metaKey) return
      e.preventDefault()
      applyZoom(scale * Math.exp(-e.deltaY * 0.0025), e.clientX, e.clientY)
    }
    vp.addEventListener("wheel", onWheel, { passive: false })
    return () => vp.removeEventListener("wheel", onWheel)
  }, [applyZoom, scale])

  useEffect(() => {
    const onChange = () => {
      setIsFullscreen(document.fullscreenElement === frameRef.current)
      setZoom(null)
    }
    document.addEventListener("fullscreenchange", onChange)
    return () => document.removeEventListener("fullscreenchange", onChange)
  }, [])

  const toggleFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen?.()
    } else {
      frameRef.current?.requestFullscreen?.().catch(() => {})
    }
  }

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isZoomed || e.button !== 0) return
    const vp = viewportRef.current
    if (!vp) return
    drag.current = { x: e.clientX, y: e.clientY, left: vp.scrollLeft, top: vp.scrollTop }
    vp.setPointerCapture(e.pointerId)
    setDragging(true)
  }
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const vp = viewportRef.current
    const d = drag.current
    if (!vp || !d) return
    vp.scrollLeft = d.left - (e.clientX - d.x)
    vp.scrollTop = d.top - (e.clientY - d.y)
  }
  const endDrag = () => {
    drag.current = null
    setDragging(false)
  }

  const scaledW = natural.w * scale
  const scaledH = natural.h * scale
  const viewportHeight = isFullscreen
    ? available.h
    : isZoomed
      ? Math.min(scaledH, Math.max(480, typeof window !== "undefined" ? window.innerHeight * 0.75 : 720))
      : scaledH

  const buttonClass =
    "flex h-9 w-9 items-center justify-center rounded-full text-moroccan-charcoal transition-colors hover:bg-moroccan-charcoal/5 disabled:cursor-not-allowed disabled:opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-moroccan-yellow"

  return (
    <>
      {/* Small screens: readable vertical timeline */}
      <div className="md:hidden">
        <MobileTimeline phases={phases} phaseLabel={copy.phase} />
      </div>

      {/* Tablet and up: the full diagram, fitted to the width, with zoom */}
      <div
        ref={frameRef}
        className={`hidden md:flex flex-col overflow-hidden border border-moroccan-charcoal/10 bg-[radial-gradient(circle,rgba(31,41,55,0.07)_1px,transparent_1px)] bg-[length:20px_20px] ${
          isFullscreen ? "h-screen bg-white" : "rounded-3xl bg-gray-50/60"
        }`}
        style={isFullscreen ? { backgroundColor: "#fff" } : undefined}
      >
        {/* Toolbar */}
        <div className="flex items-center justify-between gap-4 border-b border-moroccan-charcoal/10 bg-white/90 px-4 py-3 backdrop-blur">
          <p className="flex items-center gap-2 text-sm text-gray-500">
            <Move className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
            <span>{copy.hint}</span>
          </p>
          <div className="flex flex-shrink-0 items-center gap-1 rounded-full border border-moroccan-charcoal/10 bg-white p-1 shadow-sm" dir="ltr">
            <button
              type="button"
              className={buttonClass}
              onClick={() => applyZoom(scale / ZOOM_STEP)}
              disabled={!isZoomed}
              aria-label={copy.zoomOut}
              title={copy.zoomOut}
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="w-14 text-center text-sm font-semibold tabular-nums text-moroccan-charcoal" aria-live="polite">
              {Math.round(scale * 100)}%
            </span>
            <button
              type="button"
              className={buttonClass}
              onClick={() => applyZoom(scale * ZOOM_STEP)}
              disabled={scale >= MAX_SCALE - 0.001}
              aria-label={copy.zoomIn}
              title={copy.zoomIn}
            >
              <Plus className="h-4 w-4" />
            </button>
            <span className="mx-1 h-5 w-px bg-moroccan-charcoal/10" aria-hidden="true" />
            <button
              type="button"
              className={buttonClass}
              onClick={() => setZoom(null)}
              disabled={!isZoomed}
              aria-label={copy.fit}
              title={copy.fit}
            >
              <ScanSearch className="h-4 w-4" />
            </button>
            <button
              type="button"
              className={buttonClass}
              onClick={toggleFullscreen}
              aria-label={isFullscreen ? copy.exitFullscreen : copy.fullscreen}
              title={isFullscreen ? copy.exitFullscreen : copy.fullscreen}
            >
              {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Expand className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Viewport */}
        <div
          ref={viewportRef}
          role="img"
          aria-label={copy.label}
          className={`relative ${isZoomed ? "overflow-auto" : "overflow-hidden"} ${
            isZoomed ? (dragging ? "cursor-grabbing select-none" : "cursor-grab") : ""
          } ${isFullscreen ? "flex-1" : ""}`}
          style={{ height: natural.h ? viewportHeight : undefined }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          dir="ltr"
        >
          <div
            className="relative"
            style={{
              width: natural.w ? scaledW : undefined,
              height: natural.h ? scaledH : undefined,
              margin: isZoomed ? undefined : "0 auto",
            }}
          >
            <div
              ref={contentRef}
              className="absolute left-0 top-0 origin-top-left"
              style={{ transform: `scale(${scale})`, visibility: natural.w ? "visible" : "hidden" }}
              dir={language === "ar" ? "rtl" : "ltr"}
            >
              <Diagram phases={phases} phaseLabel={copy.phase} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
