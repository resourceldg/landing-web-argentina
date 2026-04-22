export default function RedesOrbit() {
  return (
    <span className="redes-orbit" aria-label="redes sociales">
      <span className="redes-orbit__word">redes</span>
      <span className="redes-orbit__stage" aria-hidden="true">

        {/* Facebook */}
        <span className="redes-orbit__logo redes-orbit__logo--1">
          <svg viewBox="0 0 48 48">
            <rect x="2" y="2" width="44" height="44" rx="12" fill="#1877F2" />
            <path d="M27.5 44V26.5h5.3l.8-6.2h-6.1v-3.9c0-1.8.5-3 3.1-3h3.3V7.3c-.6-.1-2.5-.3-4.8-.3-4.7 0-8 2.9-8 8.1v4.5H15v6.2h5.1V44h7.4z" fill="#fff" />
          </svg>
        </span>

        {/* Instagram */}
        <span className="redes-orbit__logo redes-orbit__logo--2">
          <svg viewBox="0 0 48 48">
            <defs>
              <radialGradient id="ig-grad" cx="30%" cy="107%" r="150%">
                <stop offset="0%"   stopColor="#FDF497" />
                <stop offset="5%"   stopColor="#FDF497" />
                <stop offset="45%"  stopColor="#FD5949" />
                <stop offset="60%"  stopColor="#D6249F" />
                <stop offset="90%"  stopColor="#285AEB" />
              </radialGradient>
            </defs>
            <rect x="2" y="2" width="44" height="44" rx="12" fill="url(#ig-grad)" />
            <rect x="10" y="10" width="28" height="28" rx="8" fill="none" stroke="#fff" strokeWidth="3" />
            <circle cx="24" cy="24" r="7" fill="none" stroke="#fff" strokeWidth="3" />
            <circle cx="33" cy="15" r="2.2" fill="#fff" />
          </svg>
        </span>

        {/* TikTok */}
        <span className="redes-orbit__logo redes-orbit__logo--3">
          <svg viewBox="0 0 48 48">
            <rect x="2" y="2" width="44" height="44" rx="12" fill="#000" />
            <path d="M33.5 17.8c-2.6-.2-4.8-1.7-6.1-3.9-.5-.8-.8-1.8-.9-2.8h-4.8v19.4c-.1 2.2-1.9 3.9-4.1 3.9-1.3 0-2.5-.6-3.3-1.6-1.1-1.5-1.2-3.5-.1-5 .7-1 1.7-1.6 2.9-1.8.6-.1 1.2 0 1.7.1v-4.8c-.5-.1-1-.1-1.6-.1-4.2 0-7.9 3-8.8 7.1-.6 2.6 0 5.3 1.6 7.4 1.6 2.1 4 3.4 6.7 3.5h.3c4.8 0 8.8-3.9 8.9-8.7V19.8c1.9 1.3 4.2 2.1 6.6 2.1h1v-4.1h-.1z" fill="#fff" />
            <path d="M28.8 21.8v-1c-.9-.1-1.7-.3-2.5-.7V25.5c-.1 4.8-4.1 8.7-8.9 8.7-1.6 0-3.1-.4-4.4-1.2 1.6 1.7 3.9 2.8 6.4 2.8h.3c4.8 0 8.8-3.9 8.9-8.7v-5.3z" fill="#FF004F" opacity=".9" />
          </svg>
        </span>

      </span>
    </span>
  );
}
