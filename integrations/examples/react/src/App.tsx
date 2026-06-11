import { useRef, useState } from 'react';
import { SchedulaGantt, type SchedulaGanttHandle, type SchedulaShape } from 'schedula-core-react';
import { demoData } from './demo-data';

const THEMES = [
  { value: '', label: 'Light' },
  { value: 'theme-dark', label: 'Dark' },
  { value: 'theme-blue', label: 'Blue' },
  { value: 'theme-soft', label: 'Soft' },
];

const SHAPES: SchedulaShape[] = ['round-rect', 'rect', 'arrow', 'circle'];

export default function App() {
  const [theme, setTheme] = useState('');
  const [gStyle, setGStyle] = useState<SchedulaShape>('round-rect');
  const [view, setView] = useState(30);
  const [filter, setFilter] = useState('');
  const ganttRef = useRef<SchedulaGanttHandle>(null);

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', padding: 16 }}>
      <header style={{ marginBottom: 12 }}>
        <h1 style={{ fontSize: 20, margin: 0 }}>SchedulaCore × React</h1>
        <p style={{ color: '#666', margin: '4px 0 0' }}>
          Official <code>schedula-core-react</code> wrapper — Free edition.
        </p>
      </header>

      <div
        style={{
          display: 'flex',
          gap: 16,
          flexWrap: 'wrap',
          alignItems: 'flex-end',
          marginBottom: 12,
          padding: 12,
          background: '#f5f5f7',
          borderRadius: 8,
        }}
      >
        <label>
          Theme<br />
          <select value={theme} onChange={(e) => setTheme(e.target.value)}>
            {THEMES.map((t) => (
              <option key={t.value} value={t.value}>{t.label}</option>
            ))}
          </select>
        </label>
        <label>
          Shape<br />
          <select value={gStyle} onChange={(e) => setGStyle(e.target.value as SchedulaShape)}>
            {SHAPES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </label>
        <label>
          Days<br />
          <input
            type="range" min={7} max={90} value={view}
            onChange={(e) => setView(Number(e.target.value))}
          />{' '}
          {view}
        </label>
        <label>
          Filter<br />
          <input
            type="text" placeholder="e.g. Design"
            value={filter} onChange={(e) => setFilter(e.target.value)}
          />
        </label>
      </div>

      <div style={{ border: '1px solid #e3e3e6', borderRadius: 8, overflow: 'hidden' }}>
        <SchedulaGantt
          ref={ganttRef}
          data={demoData}
          theme={theme}
          gStyle={gStyle}
          view={view}
          filter={filter}
          onReady={(core) => console.log('SchedulaCore ready', core)}
        />
      </div>
    </div>
  );
}
