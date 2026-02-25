import { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageContext';

interface SettingsModalProps {
  open: boolean;
  apiKey: string;
  onSave: (key: string) => void;
  onClose: () => void;
  onClearAll: () => void;
}

export default function SettingsModal({ open, apiKey, onSave, onClose, onClearAll }: SettingsModalProps) {
  const { t } = useLanguage();
  const [keyInput, setKeyInput] = useState(apiKey);

  useEffect(() => {
    if (open) setKeyInput(apiKey);
  }, [open, apiKey]);

  function handleSave() {
    onSave(keyInput.trim());
    onClose();
  }

  function handleClearAll() {
    if (!confirm(t.clearConfirm)) return;
    onClearAll();
    onClose();
  }

  function handleOverlayClick(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === e.currentTarget) onClose();
  }

  return (
    <div className={`modal-overlay${open ? ' open' : ''}`} onClick={handleOverlayClick}>
      <div className="modal">
        <h3>{t.settingsTitle}</h3>
        <p>{t.settingsDesc}</p>
        <div>
          <div className="section-label" style={{ marginBottom: 8 }}>{t.settingsKeyLabel}</div>
          <input
            type="password"
            placeholder="sk-ant-api03-..."
            value={keyInput}
            onChange={e => setKeyInput(e.target.value)}
          />
        </div>
        <div className="modal-actions">
          <button
            className="btn btn-ghost"
            style={{ marginRight: 'auto', color: 'var(--danger)' }}
            onClick={handleClearAll}
          >
            {t.clearAllBtn}
          </button>
          <button className="btn btn-ghost" onClick={onClose}>
            {t.cancelBtn}
          </button>
          <button className="btn btn-primary" onClick={handleSave}>
            {t.saveBtn}
          </button>
        </div>
      </div>
    </div>
  );
}
