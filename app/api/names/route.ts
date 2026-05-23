import { connectDB } from '@/lib/db';
import Name from '@/lib/models/Name';
import { NextRequest, NextResponse } from 'next/server';

// GET - Obtener todos los nombres
export async function GET() {
  try {
    await connectDB();
    const names = await Name.find({}).sort({ createdAt: -1 });
    return NextResponse.json(names, { status: 200 });
  } catch (error) {
    console.error('Error al obtener nombres:', error);
    return NextResponse.json(
      { error: 'Error al obtener nombres' },
      { status: 500 }
    );
  }
}

// POST - Guardar un nombre
export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const { name } = await req.json();

    if (!name || name.trim() === '') {
      return NextResponse.json(
        { error: 'El nombre no puede estar vacío' },
        { status: 400 }
      );
    }

    const newName = new Name({ name: name.trim() });
    await newName.save();

    return NextResponse.json(newName, { status: 201 });
  } catch (error) {
    console.error('Error al guardar nombre:', error);
    return NextResponse.json(
      { error: 'Error al guardar el nombre' },
      { status: 500 }
    );
  }
}
