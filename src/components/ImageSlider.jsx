import { useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { createPortal } from "react-dom";

/**
 * ImageSlider — shows one image at a time with prev / next controls.
 * Clicking any image opens a full-screen lightbox for better inspection.
 *
 * Props:
 *  - images : string[]  – array of image src values (required, ≥ 1)
 *  - alt    : string    – accessible alt text for every slide
 *  - width  : number    – rendered width in px (default 500)
 */
export default function ImageSlider({ images = [], alt = "Project image", width = 500, className = "" }) {
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const [lbIndex, setLbIndex] = useState(0);
  const total = images.length;

  /* ── Slider navigation ── */
  const prev = useCallback((e) => {
    e.preventDefault(); e.stopPropagation();
    setCurrent((c) => (c - 1 + total) % total);
  }, [total]);

  const next = useCallback((e) => {
    e.preventDefault(); e.stopPropagation();
    setCurrent((c) => (c + 1) % total);
  }, [total]);

  /* ── Lightbox open/close ── */
  const openLightbox = (idx) => { setLbIndex(idx); setLightbox(true); };
  const closeLightbox = () => setLightbox(false);
  const lbPrev = (e) => { e.stopPropagation(); setLbIndex((i) => (i - 1 + total) % total); };
  const lbNext = (e) => { e.stopPropagation(); setLbIndex((i) => (i + 1) % total); };

  /* ── Keyboard support ── */
  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") setLbIndex((i) => (i - 1 + total) % total);
      if (e.key === "ArrowRight") setLbIndex((i) => (i + 1) % total);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, total]);

  /* ── Prevent body scroll when lightbox open ── */
  useEffect(() => {
    document.body.style.overflow = lightbox ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  if (total === 0) return null;

  /* ─────────────────────────────────────────────
     Shared "inspect" cursor style for clickable images
  ───────────────────────────────────────────── */
  const inspectCursor = { cursor: "zoom-in" };

  /* ─────────────────────────────────────────────
     SINGLE IMAGE — no slider chrome
  ───────────────────────────────────────────── */
  if (total === 1) {
    return (
      <>
        <div className={className} style={{ position: "relative", display: "inline-block", width: "100%", maxWidth: width }}>
          <img
            src={images[0]}
            width={width}
            alt={alt}
            onClick={() => openLightbox(0)}
            style={{ minHeight: "190.53px", display: "block", borderRadius: "8px", ...inspectCursor }}
          />
          {/* Magnify hint badge */}
          <span style={hintBadgeStyle}>
            <ZoomIn size={12} /> Inspect
          </span>
        </div>
        {lightbox && <Lightbox images={images} index={lbIndex} setIndex={setLbIndex} alt={alt} onClose={closeLightbox} lbPrev={lbPrev} lbNext={lbNext} />}
      </>
    );
  }

  /* ─────────────────────────────────────────────
     MULTI-IMAGE SLIDER
  ───────────────────────────────────────────── */
  return (
    <>
      <div className={className} style={{ position: "relative", width: "100%", maxWidth: width }}>

        {/* ── Track ── */}
        <div
          onClick={() => openLightbox(current)}
          style={{
            display: "flex",
            overflow: "hidden",
            borderRadius: "8px",
            ...inspectCursor,
          }}
        >
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`${alt} ${i + 1}`}
              width={width}
              style={{
                minHeight: "190.53px",
                objectFit: "cover",
                flexShrink: 0,
                width: "100%",
                transform: `translateX(${(i - current) * 100}%)`,
                transition: "transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
                position: i === 0 ? "relative" : "absolute",
                top: 0,
                left: 0,
              }}
            />
          ))}
        </div>

        {/* ── Magnify hint badge ── */}
        {/* <span style={hintBadgeStyle}>
          <ZoomIn size={12} /> Inspect
        </span> */}

        {/* ── Prev button ── */}
        <NavBtn onClick={prev} side="left" aria="Previous image"><ChevronLeft size={18} color="#fff" /></NavBtn>

        {/* ── Next button ── */}
        <NavBtn onClick={next} side="right" aria="Next image"><ChevronRight size={18} color="#fff" /></NavBtn>

        {/* ── Dot indicators ── */}
        <div style={{ position: "absolute", bottom: "8px", left: "50%", transform: "translateX(-50%)", display: "flex", gap: "6px", zIndex: 10 }}>
          {images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); setCurrent(i); }}
              aria-label={`Go to image ${i + 1}`}
              style={{
                width: i === current ? "20px" : "8px",
                height: "8px",
                borderRadius: "4px",
                background: i === current ? "#4ade80" : "rgba(255,255,255,0.5)",
                border: "none",
                padding: 0,
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>

        {/* ── Counter badge ── */}
        <span style={{ position: "absolute", top: "8px", right: "8px", background: "rgba(0,0,0,0.6)", color: "#fff", fontSize: "11px", padding: "2px 8px", borderRadius: "12px", zIndex: 10, fontFamily: "monospace" }}>
          {current + 1} / {total}
        </span>
      </div>

      {/* ── Lightbox portal ── */}
      {lightbox && <Lightbox images={images} index={lbIndex} setIndex={setLbIndex} alt={alt} onClose={closeLightbox} lbPrev={lbPrev} lbNext={lbNext} />}
    </>
  );
}

/* ═══════════════════════════════════════════════════════
   Lightbox overlay — rendered via portal at document.body
═══════════════════════════════════════════════════════ */
function Lightbox({ images, index, setIndex, alt, onClose, lbPrev, lbNext }) {
  const total = images.length;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Inspect: ${alt}`}
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "rgba(0,0,0,0.92)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        animation: "lb-fade-in 0.2s ease",
      }}
    >
      {/* ── Style injection ── */}
      <style>{`
        @keyframes lb-fade-in { from { opacity:0 } to { opacity:1 } }
        @keyframes lb-img-in  { from { opacity:0; transform:scale(0.93) } to { opacity:1; transform:scale(1) } }
        .lb-img { animation: lb-img-in 0.25s cubic-bezier(0.4,0,0.2,1); }
      `}</style>

      {/* ── Close ── */}
      <button
        onClick={onClose}
        aria-label="Close"
        style={{ position: "fixed", top: "18px", right: "22px", background: "rgba(255,255,255,0.12)", border: "none", borderRadius: "50%", width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", zIndex: 10001, transition: "background 0.2s" }}
        onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.25)")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.12)")}
      >
        <X size={20} color="#fff" />
      </button>

      {/* ── Image container (stop propagation so click on img doesn't close) ── */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{ position: "relative", maxWidth: "90vw", maxHeight: "90vh", display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <img
          key={index}
          className="lb-img"
          src={images[index]}
          alt={`${alt} ${index + 1}`}
          style={{ maxWidth: "90vw", maxHeight: "90vh", objectFit: "contain", borderRadius: "6px", boxShadow: "0 25px 80px rgba(0,0,0,0.8)", display: "block" }}
        />

        {/* ── Counter overlay ── */}
        {total > 1 && (
          <span style={{ position: "absolute", top: "10px", right: "10px", background: "rgba(0,0,0,0.65)", color: "#fff", fontSize: "12px", padding: "3px 10px", borderRadius: "12px", fontFamily: "monospace" }}>
            {index + 1} / {total}
          </span>
        )}

        {/* ── Prev / Next (only for multi-image) ── */}
        {total > 1 && (
          <>
            <NavBtn onClick={lbPrev} side="left" aria="Previous image" size={48} iconSize={24}><ChevronLeft size={24} color="#fff" /></NavBtn>
            <NavBtn onClick={lbNext} side="right" aria="Next image" size={48} iconSize={24}><ChevronRight size={24} color="#fff" /></NavBtn>

            {/* Dot indicators */}
            <div style={{ position: "absolute", bottom: "-36px", left: "50%", transform: "translateX(-50%)", display: "flex", gap: "8px" }}>
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setIndex(i); }}
                  aria-label={`Go to image ${i + 1}`}
                  style={{ width: i === index ? "24px" : "9px", height: "9px", borderRadius: "5px", background: i === index ? "#4ade80" : "rgba(255,255,255,0.4)", border: "none", padding: 0, cursor: "pointer", transition: "all 0.3s ease" }}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* ── Keyboard hint ── */}
      <span style={{ position: "fixed", bottom: "18px", left: "50%", transform: "translateX(-50%)", color: "rgba(255,255,255,0.35)", fontSize: "12px", userSelect: "none", whiteSpace: "nowrap" }}>
        {total > 1 ? "← → to navigate  ·  " : ""}Esc to close
      </span>
    </div>,
    document.body
  );
}

/* ── Shared nav button ── */
function NavBtn({ onClick, side, aria, size = 34, children }) {
  return (
    <button
      onClick={onClick}
      aria-label={aria}
      style={{
        position: "absolute",
        top: "50%",
        [side]: side === "left" ? "-20px" : "-20px",
        transform: "translateY(-50%)",
        background: "rgba(0,0,0,0.55)",
        border: "none",
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        zIndex: 10,
        transition: "background 0.2s, transform 0.2s",
      }}
      onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(0,0,0,0.85)"; e.currentTarget.style.transform = "translateY(-50%) scale(1.1)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(0,0,0,0.55)"; e.currentTarget.style.transform = "translateY(-50%) scale(1)"; }}
    >
      {children}
    </button>
  );
}

/* ── "Inspect" badge style ── */
const hintBadgeStyle = {
  position: "absolute",
  bottom: "8px",
  left: "8px",
  background: "rgba(0,0,0,0.6)",
  color: "rgba(255,255,255,0.8)",
  fontSize: "11px",
  padding: "3px 8px",
  borderRadius: "12px",
  display: "flex",
  alignItems: "center",
  gap: "4px",
  pointerEvents: "none",
  zIndex: 10,
  userSelect: "none",
};
