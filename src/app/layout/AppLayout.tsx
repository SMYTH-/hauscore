import { Link, Outlet } from 'react-router-dom';

export function AppLayout() {
  return (
    <div>
      <header style={{ padding: 16, borderBottom: '1px solid #eee' }}>
        <nav style={{ display: 'flex', gap: 12 }}>
          <Link to="/">Home</Link>
          <Link to="/trainers">Trainers</Link>
        </nav>
      </header>

      <main style={{ padding: 16 }}>
        <Outlet />
      </main>
    </div>
  );
}
