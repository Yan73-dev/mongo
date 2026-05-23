'use client';

import { useState, useEffect } from 'react';
import styles from './page.module.css';

interface Name {
  id: number;
  name: string;
  created_at: string;
}

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [names, setNames] = useState<Name[]>([]);
  const [loading, setLoading] = useState(false);
  const [showNames, setShowNames] = useState(false);

  // Obtener nombres cuando se carga la página
  useEffect(() => {
    fetchNames();
  }, []);

  // Función para enviar el nombre a la BD
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!inputValue.trim()) {
      alert('Por favor ingresa un nombre');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('/api/names', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: inputValue }),
      });

      if (response.ok) {
        setInputValue('');
        await fetchNames();
        alert('✅ Nombre guardado correctamente');
        setShowNames(true);
      } else {
        const error = await response.json();
        alert(`❌ ${error.error}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('❌ Error en la solicitud');
    } finally {
      setLoading(false);
    }
  };

  // Función para obtener todos los nombres
  const fetchNames = async () => {
    try {
      const response = await fetch('/api/names');
      if (response.ok) {
        const data = await response.json();
        setNames(data);
      }
    } catch (error) {
      console.error('Error al obtener nombres:', error);
    }
  };

  const toggleNames = () => {
    setShowNames(!showNames);
    if (!showNames) {
      fetchNames();
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>📝 Gestor de Nombres</h1>

        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ingresa un nombre..."
            className={styles.input}
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading}
            className={styles.buttonPrimary}
          >
            {loading ? '⏳ Enviando...' : '✉️ Enviar'}
          </button>
        </form>

        <button
          onClick={toggleNames}
          className={styles.buttonSecondary}
        >
          {showNames ? '🙈 Ocultar Nombres' : '👀 Ver Nombres'}
        </button>

        {showNames && (
          <div className={styles.namesContainer}>
            {names.length === 0 ? (
              <p className={styles.emptyMessage}>
                No hay nombres guardados aún
              </p>
            ) : (
              <div className={styles.namesList}>
                {names.map((item) => (
                  <h1 key={item.id} className={styles.nameItem}>
                    {item.name}
                  </h1>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
