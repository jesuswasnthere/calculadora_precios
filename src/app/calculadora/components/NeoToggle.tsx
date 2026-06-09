// src/app/calculadora/components/NeoToggle.tsx
'use client'

type Props = {
  id: string
  checked: boolean
  onChange: (checked: boolean) => void
}

export default function NeoToggle({ id, checked, onChange }: Props) {
  return (
    <div className="neo-toggle-container">
      <input
        className="neo-toggle-input"
        id={id}
        type="checkbox"
        checked={checked}
        onChange={e => onChange(e.target.checked)}
      />
      <label className="neo-toggle" htmlFor={id}>
        <div className="neo-track">
          <div className="neo-background-layer" />
          <div className="neo-grid-layer" />
          <div className="neo-spectrum-analyzer">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="neo-spectrum-bar" />
            ))}
          </div>
          <div className="neo-track-highlight" />
        </div>
        <div className="neo-thumb">
          <div className="neo-thumb-ring" />
          <div className="neo-thumb-core">
            <div className="neo-thumb-icon">
              <div className="neo-thumb-wave" />
              <div className="neo-thumb-pulse" />
            </div>
          </div>
        </div>
        <div className="neo-gesture-area" />
        <div className="neo-interaction-feedback">
          <div className="neo-ripple" />
          <div className="neo-progress-arc" />
        </div>
        <div className="neo-status">
          <div className="neo-status-indicator">
            <div className="neo-status-dot" />
            <div className="neo-status-text" />
          </div>
        </div>
      </label>
    </div>
  )
}