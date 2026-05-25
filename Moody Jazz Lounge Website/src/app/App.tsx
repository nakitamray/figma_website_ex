import { useEffect, useState } from "react";

type AlbumStyle = "A" | "B" | "C" | "D";

interface Album {
  title: string;
  artist: string;
  year: string;
  bg: string;
  fg: string;
  accent: string;
  style: AlbumStyle;
}

const ALBUMS: Album[] = [
  { title: "Blue Hour", artist: "C. Montgomery Trio", year: "'62", bg: "#0d1b2a", fg: "#e07a5f", accent: "#4a90d9", style: "A" },
  { title: "Velvet Smoke", artist: "Nina Reyes", year: "'58", bg: "#1a0800", fg: "#f2c94c", accent: "#8b3a00", style: "B" },
  { title: "After Midnight", artist: "Blue Room", year: "'65", bg: "#0f1e2a", fg: "#7ecfef", accent: "#1a4a6a", style: "C" },
  { title: "EMBER", artist: "Dexter Gill", year: "'61", bg: "#2d1b00", fg: "#e8985e", accent: "#5a3010", style: "D" },
  { title: "Crimson Keys", artist: "H. Monroe", year: "'59", bg: "#1a0808", fg: "#e63946", accent: "#5a1010", style: "A" },
  { title: "Coastal Drift", artist: "Shoreline Five", year: "'67", bg: "#0a1628", fg: "#90e0ef", accent: "#1a3a5c", style: "B" },
  { title: "Noir Sessions", artist: "Coltrane & Friends", year: "'63", bg: "#0d0d0d", fg: "#b5838d", accent: "#2a1515", style: "C" },
  { title: "GOLDEN HOUR", artist: "Sun Ra Ensemble", year: "'56", bg: "#1a1500", fg: "#d4a574", accent: "#5a4010", style: "D" },
  { title: "Lady Violet", artist: "Purple Sessions", year: "'71", bg: "#1a0a28", fg: "#c77dff", accent: "#4a1a8a", style: "A" },
  { title: "Jungle Groove", artist: "Afro Jazz Unit", year: "'69", bg: "#001a0a", fg: "#57cc99", accent: "#0a5a30", style: "B" },
  { title: "Tangerine", artist: "Baker & Cole", year: "'73", bg: "#2a1500", fg: "#ff9f1c", accent: "#6a3a00", style: "C" },
  { title: "MIDNIGHT", artist: "The Quartett", year: "'60", bg: "#0a0a28", fg: "#a8dadc", accent: "#1a1a6a", style: "D" },
  { title: "ESCAPE", artist: "Berlin Underground", year: "'77", bg: "#111111", fg: "#ffffff", accent: "#444444", style: "A" },
  { title: "EUROPE", artist: "Continental Jazz", year: "'75", bg: "#1a0000", fg: "#cc3333", accent: "#5a0000", style: "B" },
  { title: "Olympia", artist: "Française Noir", year: "'68", bg: "#180018", fg: "#e8c5e8", accent: "#5a205a", style: "C" },
  { title: "VOLARE", artist: "Roma Orchestra", year: "'62", bg: "#001428", fg: "#f0c060", accent: "#003060", style: "D" },
  { title: "Escalator", artist: "Sky Kings", year: "'74", bg: "#141414", fg: "#a8e000", accent: "#303000", style: "A" },
  { title: "Desafinado", artist: "João Quartet", year: "'57", bg: "#001a10", fg: "#f4e04a", accent: "#003a20", style: "B" },
  { title: "TRANQUIL", artist: "Waters & Moon", year: "'70", bg: "#001820", fg: "#a8d8ea", accent: "#003040", style: "C" },
  { title: "VOODOO", artist: "Louisiana Jazz", year: "'66", bg: "#1a1000", fg: "#ff6030", accent: "#4a2500", style: "D" },
];

function CoverA({ a }: { a: Album }) {
  return (
    <svg viewBox="0 0 200 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" fill={a.bg} />
      <rect x="0" y="0" width="200" height="11" fill={a.fg} opacity="0.9" />
      <rect x="0" y="11" width="200" height="4" fill={a.accent} opacity="0.7" />
      <circle cx="105" cy="118" r="64" fill={a.accent} opacity="0.12" />
      <circle cx="105" cy="118" r="47" fill={a.fg} opacity="0.06" />
      <line x1="40" y1="118" x2="170" y2="118" stroke={a.fg} strokeWidth="0.5" opacity="0.22" />
      <line x1="105" y1="55" x2="105" y2="181" stroke={a.fg} strokeWidth="0.5" opacity="0.22" />
      <text x="10" y="36" fill={a.fg} fontSize="17" fontWeight="bold" fontFamily="Georgia, serif">{a.title}</text>
      <text x="10" y="188" fill={a.fg} fontSize="8" fontFamily="Arial, sans-serif" opacity="0.7" letterSpacing="1.5">{a.artist.toUpperCase()}</text>
      <text x="190" y="188" fill={a.fg} fontSize="8" fontFamily="Arial, sans-serif" textAnchor="end" opacity="0.4">{a.year}</text>
      <rect x="0" y="195" width="200" height="5" fill={a.accent} opacity="0.5" />
    </svg>
  );
}

function CoverB({ a }: { a: Album }) {
  return (
    <svg viewBox="0 0 200 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" fill={a.bg} />
      <circle cx="132" cy="95" r="80" fill={a.accent} opacity="0.22" />
      <circle cx="132" cy="95" r="55" fill={a.fg} opacity="0.07" />
      <circle cx="62" cy="142" r="33" fill={a.fg} opacity="0.13" />
      <text x="10" y="48" fill={a.fg} fontSize="20" fontWeight="bold" fontFamily="Georgia, serif">{a.title}</text>
      <line x1="10" y1="58" x2="112" y2="58" stroke={a.fg} strokeWidth="1.2" opacity="0.45" />
      <text x="10" y="72" fill={a.fg} fontSize="9" fontFamily="Arial, sans-serif" opacity="0.65" letterSpacing="0.5">{a.artist}</text>
      <text x="188" y="22" fill={a.fg} fontSize="9" fontFamily="Arial, sans-serif" textAnchor="end" opacity="0.32">{a.year}</text>
      <rect x="10" y="182" width="72" height="2" fill={a.fg} opacity="0.32" />
      <rect x="10" y="188" width="36" height="2" fill={a.accent} opacity="0.65" />
    </svg>
  );
}

function CoverC({ a, uid }: { a: Album; uid: string }) {
  const gid = `gc-${uid}`;
  const vid = `vc-${uid}`;
  return (
    <svg viewBox="0 0 200 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id={gid} cx="38%" cy="38%" r="72%">
          <stop offset="0%" stopColor={a.accent} stopOpacity="0.9" />
          <stop offset="100%" stopColor={a.bg} stopOpacity="1" />
        </radialGradient>
        <radialGradient id={vid} cx="50%" cy="50%" r="70%">
          <stop offset="40%" stopColor="transparent" stopOpacity="0" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.78" />
        </radialGradient>
      </defs>
      <rect width="200" height="200" fill={`url(#${gid})`} />
      <rect width="200" height="200" fill={`url(#${vid})`} />
      <ellipse cx="118" cy="95" rx="46" ry="68" fill={a.fg} opacity="0.07" />
      <text x="12" y="168" fill={a.fg} fontSize="15" fontWeight="bold" fontFamily="Georgia, serif" opacity="0.95">{a.title}</text>
      <text x="12" y="184" fill={a.fg} fontSize="8" fontFamily="Arial, sans-serif" opacity="0.62" letterSpacing="1">{a.artist}</text>
      <rect x="5" y="5" width="190" height="190" fill="none" stroke={a.fg} strokeWidth="1" opacity="0.17" />
    </svg>
  );
}

function CoverD({ a }: { a: Album }) {
  const words = a.title.split(" ").slice(0, 3);
  const fs = words.length === 1 ? 62 : words.length === 2 ? 48 : 40;
  const startY = words.length === 1 ? 118 : words.length === 2 ? 80 : 62;
  const lh = words.length === 1 ? 66 : words.length === 2 ? 56 : 48;
  return (
    <svg viewBox="0 0 200 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" fill={a.bg} />
      <rect x="0" y="68" width="200" height="132" fill={a.accent} opacity="0.13" />
      {words.map((word, i) => (
        <text
          key={i}
          x="14"
          y={startY + i * lh}
          fill={a.fg}
          fontSize={fs}
          fontWeight="bold"
          fontFamily="Impact, 'Arial Black', sans-serif"
          opacity="0.95"
          letterSpacing="-0.5"
        >
          {word}
        </text>
      ))}
      <text x="14" y="192" fill={a.fg} fontSize="8" fontFamily="Arial, sans-serif" opacity="0.52" letterSpacing="2">{a.artist}</text>
      <rect x="4" y="12" width="5" height="174" fill={a.fg} opacity="0.62" />
    </svg>
  );
}

function Cover({ album, idx }: { album: Album; idx: number }) {
  switch (album.style) {
    case "A": return <CoverA a={album} />;
    case "B": return <CoverB a={album} />;
    case "C": return <CoverC a={album} uid={`${idx}`} />;
    case "D": return <CoverD a={album} />;
  }
}

function Cubby({ albumIdx }: { albumIdx: number }) {
  const album = ALBUMS[albumIdx % ALBUMS.length];
  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "#160b03",
        aspectRatio: "1",
        overflow: "hidden",
        boxShadow:
          "inset 6px 0 22px rgba(0,0,0,0.8), inset -6px 0 22px rgba(0,0,0,0.8), inset 0 14px 32px rgba(0,0,0,0.92), inset 0 -4px 8px rgba(0,0,0,0.4)",
      }}
    >
      {/* Subtle back-wall wood grain */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "repeating-linear-gradient(88deg, transparent, transparent 42px, rgba(0,0,0,0.035) 42px, rgba(0,0,0,0.035) 44px)",
          opacity: 0.6,
          pointerEvents: "none",
        }}
      />

      {/* Record cover leaning against back wall */}
      <div
        style={{
          position: "absolute",
          bottom: "11px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "80%",
          aspectRatio: "1",
          filter: "brightness(0.83) contrast(1.06) saturate(0.92)",
        }}
      >
        <Cover album={album} idx={albumIdx} />
      </div>

      {/* Amber glow rising from LED strip */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "58%",
          background:
            "linear-gradient(to top, rgba(255,126,14,0.78) 0%, rgba(255,94,6,0.42) 26%, rgba(255,70,0,0.16) 55%, transparent 100%)",
          pointerEvents: "none",
          mixBlendMode: "screen",
        }}
      />

      {/* LED strip */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "9%",
          right: "9%",
          height: "3px",
          background:
            "linear-gradient(to right, transparent, #ffb018, #ff8010, #ffb018, transparent)",
          boxShadow:
            "0 0 12px 5px rgba(255,142,22,0.68), 0 0 30px 12px rgba(255,100,8,0.32)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}

const ROWS = 5;

export default function App() {
  const [scrollY, setScrollY] = useState(0);
  const [cols, setCols] = useState(4);
  const [vh, setVh] = useState(800);

  useEffect(() => {
    const updateLayout = () => {
      setVh(window.innerHeight);
      if (window.innerWidth < 580) setCols(2);
      else if (window.innerWidth < 880) setCols(3);
      else setCols(4);
    };
    updateLayout();
    window.addEventListener("resize", updateLayout);
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("resize", updateLayout);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // 22deg (looking up from below) → -3deg (slightly looking down) over 1 viewport of scroll
  const progress = Math.min(1, scrollY / Math.max(1, vh));
  const rotateX = 22 - progress * 25;

  return (
    <div style={{ minHeight: "250vh", background: "#050200" }}>
      {/* 200vh sticky container — gives 100vh of scroll while scene stays fixed */}
      <div style={{ height: "200vh" }}>
        <div
          style={{
            position: "sticky",
            top: 0,
            height: "100vh",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "radial-gradient(ellipse at 50% 58%, #130804 0%, #050200 100%)",
          }}
        >
          {/* Perspective wrapper — vanishing point sits below center */}
          <div
            style={{
              perspective: "1400px",
              perspectiveOrigin: "50% 78%",
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Shelf unit — rotates on scroll */}
            <div
              style={{
                transform: `rotateX(${rotateX}deg)`,
                transformOrigin: "center center",
                willChange: "transform",
              }}
            >
              {/* Outer dark-wood surround */}
              <div
                style={{
                  background:
                    "linear-gradient(158deg, #1f0e05 0%, #130802 45%, #1d0c04 100%)",
                  padding: "20px",
                  boxShadow:
                    "0 0 120px rgba(0,0,0,0.96), 0 0 60px rgba(0,0,0,0.82), inset 0 0 24px rgba(0,0,0,0.55)",
                }}
              >
                {/* Cubby grid */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: `repeat(${cols}, clamp(128px, 16.5vw, 208px))`,
                    gridTemplateRows: `repeat(${ROWS}, clamp(128px, 16.5vw, 208px))`,
                    gap: "18px",
                    background:
                      "linear-gradient(158deg, #1b0d05 0%, #110702 50%, #1b0d05 100%)",
                    padding: "18px",
                  }}
                >
                  {Array.from({ length: cols * ROWS }, (_, i) => (
                    <Cubby key={i} albumIdx={i} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Radial vignette — darkens corners */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse at 50% 52%, transparent 36%, rgba(5,2,0,0.90) 100%)",
              pointerEvents: "none",
            }}
          />

          {/* Bottom fade — grounds the branding text */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "32%",
              background: "linear-gradient(to top, #050200 0%, transparent 100%)",
              pointerEvents: "none",
            }}
          />

          {/* Top fade */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "18%",
              background: "linear-gradient(to bottom, #050200 0%, transparent 100%)",
              pointerEvents: "none",
            }}
          />

          {/* Lounge branding at bottom */}
          <div
            style={{
              position: "absolute",
              bottom: "38px",
              left: 0,
              right: 0,
              textAlign: "center",
              zIndex: 20,
              pointerEvents: "none",
            }}
          >
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(10px, 1.05vw, 13px)",
                letterSpacing: "0.40em",
                color: "#d4a574",
                opacity: 0.60,
                marginBottom: "10px",
                textTransform: "uppercase",
                margin: "0 0 10px",
              }}
            >
              An Intimate Jazz Lounge
            </p>
            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(32px, 5vw, 68px)",
                fontWeight: 700,
                color: "#e8dcc8",
                letterSpacing: "0.05em",
                lineHeight: 1.1,
                textShadow:
                  "0 2px 40px rgba(212,165,116,0.20), 0 0 80px rgba(196,89,17,0.14)",
                margin: 0,
              }}
            >
              The Velvet Room
            </h1>
          </div>

          {/* Scroll line indicator */}
          <div
            style={{
              position: "absolute",
              bottom: "26px",
              right: "30px",
              zIndex: 20,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              opacity: Math.max(0, 1 - progress * 3),
              transition: "opacity 0.3s",
            }}
          >
            <div
              style={{
                width: "1px",
                height: "48px",
                background: "linear-gradient(to bottom, transparent, rgba(212,165,116,0.75))",
              }}
            />
          </div>
        </div>
      </div>

      {/* Below-fold section */}
      <div
        style={{
          minHeight: "50vh",
          background: "linear-gradient(to bottom, #050200 0%, #0a0604 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px 24px",
          gap: "32px",
        }}
      >
        <div
          style={{
            width: "48px",
            height: "1px",
            background: "linear-gradient(to right, transparent, #d4a574, transparent)",
          }}
        />

        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic",
            fontSize: "clamp(20px, 2.5vw, 30px)",
            color: "#d4a574",
            textAlign: "center",
            maxWidth: "580px",
            letterSpacing: "0.02em",
            margin: 0,
            lineHeight: 1.5,
          }}
        >
          Where vintage elegance meets the pulse of live jazz
        </p>

        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(16px, 1.8vw, 20px)",
            color: "#9d8b7a",
            lineHeight: 1.9,
            letterSpacing: "0.01em",
            textAlign: "center",
            maxWidth: "520px",
            margin: 0,
          }}
        >
          Step into a world suspended in amber light. Each evening unfolds with live
          music, expertly crafted cocktails, and the warmth of carefully curated vinyl
          spinning through the night.
        </p>

        <button
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = "0 6px 32px rgba(196,89,17,0.55)";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "0 4px 24px rgba(196,89,17,0.35)";
            e.currentTarget.style.transform = "translateY(0)";
          }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "13px",
            letterSpacing: "0.22em",
            color: "#0a0604",
            background: "linear-gradient(135deg, #d4a574 0%, #c49560 100%)",
            border: "none",
            padding: "16px 44px",
            cursor: "pointer",
            textTransform: "uppercase",
            boxShadow: "0 4px 24px rgba(196,89,17,0.35)",
            transition: "box-shadow 0.25s ease, transform 0.25s ease",
          }}
        >
          Reserve a Table
        </button>
      </div>
    </div>
  );
}
