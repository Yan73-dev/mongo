'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import styles from './page.module.css';

interface AceEntry {
  id: number;
  user: string;
  created_at: string;
}

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [entries, setEntries] = useState<AceEntry[]>([]);
  const [loading, setLoading] = useState(false);
  const [showEntries, setShowEntries] = useState(false);
  const [message, setMessage] = useState('');

  // Obtener datos cuando se carga la página
  useEffect(() => {
    fetchEntries();
  }, []);

  // Función para obtener todos los elementos de la columna user
  const fetchEntries = async () => {
    try {
      const { data, error } = await supabase
        .from('Ace')
        .select('id, user, created_at')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error al obtener datos:', error);
        setMessage(`❌ Error: ${error.message}`);
        return;
      }

      setEntries(data || []);
    } catch (error) {
      console.error('Error:', error);
      setMessage('❌ Error al obtener datos');
    }
  };

  // Función para enviar el contenido al input
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!inputValue.trim()) {
      setMessage('⚠️ Por favor ingresa un valor');
      return;
    }

    setLoading(true);
    setMessage('');

    try {
      const { data, error } = await supabase
        .from('Ace')
        .insert([{ user: inputValue.trim() }])
        .select();

      if (error) {
        console.error('Error al guardar:', error);
        setMessage(`❌ Error: ${error.message}`);
        return;
      }

      setInputValue('');
      setMessage('✅ Guardado correctamente');
      await fetchEntries();
      setShowEntries(true);

      // Limpiar mensaje después de 3 segundos
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      console.error('Error:', error);
      setMessage('❌ Error en la solicitud');
    } finally {
      setLoading(false);
    }
  };

  const toggleEntries = () => {
    setShowEntries(!showEntries);
    if (!showEntries) {
      fetchEntries();
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>📝 Gestor de Contenido</h1>

        {message && (
          <div
            className={styles.message}
            style={{
              backgroundColor: message.startsWith('✅')
                ? '#d4edda'
                : message.startsWith('⚠️')
                ? '#fff3cd'
                : '#f8d7da',
            }}
          >
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ingresa un valor..."
            className={styles.input}
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading}
            className={styles.buttonPrimary}
          >
            {loading ? '⏳ Guardando...' : '✉️ Guardar'}
          </button>
        </form>

        <button onClick={toggleEntries} className={styles.buttonSecondary}>
          {showEntries ? '🙈 Ocultar Elementos' : '👀 Ver Elementos'}
        </button>

        {showEntries && (
          <div className={styles.entriesContainer}>
            {entries.length === 0 ? (
              <p className={styles.emptyMessage}>
                No hay elementos guardados aún
              </p>
            ) : (
              <div className={styles.entriesList}>
                {entries.map((item) => (
                  <div key={item.id} className={styles.entryItem}>
                    <p className={styles.entryText}>{item.user}</p>
                    <small className={styles.entryDate}>
                      {new Date(item.created_at).toLocaleString()}
                    </small>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
