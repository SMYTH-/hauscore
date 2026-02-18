import { NavLink, Outlet } from 'react-router-dom';

export function AppLayout() {
  return (
    <div className="min-h-dvh bg-zinc-50 text-zinc-900 w-full">
      <header className="sticky top-0 z-10 border-b border-zinc-200 bg-white/80 backdrop-blur w-full">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <div className="flex items-baseline gap-2">
          <svg className="w-48 h-12" xmlns="http://www.w3.org/2000/svg" width="920" height="220" viewBox="0 0 920 220" fill="none" role="img" aria-label="Hauscore logo">
            <g transform="translate(40 40)">
              <path d="M70 10L10 62V140C10 151.046 18.954 160 30 160H110C121.046 160 130 151.046 130 140V62L70 10Z"
                    stroke="#0B0F14" stroke-width="14" stroke-linejoin="round"/>
              <circle cx="70" cy="105" r="18" fill="#84CC16"/>
              <path d="M38 82V136H102V82" stroke="#0B0F14" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" opacity="0.9"/>
            </g>

            <g transform="translate(220 62)" fill="#0B0F14">
              <text x="0" y="86" font-family="Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif"
                    font-size="86" font-weight="700" letter-spacing="-1.5">
                Haus<tspan fill="#84CC16">core</tspan>
              </text>
            </g>
          </svg>

          </div>

          <nav className="flex items-center gap-1">
            <NavLink
              to="/find-a-trainer"
              className={({ isActive }) =>
                `rounded-md px-3 py-2 text-sm font-medium ${
                  isActive ? 'bg-zinc-900 !text-white' : 'text-zinc-700 hover:bg-zinc-100'
                }`
              }
            >
              Find a Trainer
            </NavLink>
            <NavLink
              to="/for-trainers"
              className={({ isActive }) =>
                `rounded-md px-3 py-2 text-sm font-medium ${
                  isActive ? 'bg-zinc-900 !text-white' : 'text-zinc-700 hover:bg-zinc-100'
                }`
              }
            >
              For Trainers
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-8 w-full">
        <Outlet />
      </main>
    </div>
  );
}
