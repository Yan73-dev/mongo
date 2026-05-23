import { getDB, initDB } from '@/lib/db';

// Inicializar BD al arrancar
setImmediate(() => {
  initDB().catch(err => console.error('Error inicializando BD:', err));
});

export async function GET() {
  try {
    const pool = await getDB();
    const result = await pool.query(
      'SELECT * FROM names ORDER BY created_at DESC'
    );
    return Response.json(result.rows, { status: 200 });
  } catch (error) {
    console.error('Error al obtener nombres:', error);
    return Response.json(
      { error: 'Error al obtener nombres' },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const { name } = await req.json();

    if (!name || name.trim() === '') {
      return Response.json(
        { error: 'El nombre no puede estar vacío' },
        { status: 400 }
      );
    }

    const pool = await getDB();
    const result = await pool.query(
      'INSERT INTO names (name) VALUES ($1) RETURNING *',
      [name.trim()]
    );

    return Response.json(result.rows[0], { status: 201 });
  } catch (error) {
    console.error('Error al guardar nombre:', error);
    return Response.json(
      { error: 'Error al guardar el nombre' },
      { status: 500 }
    );
  }
}
