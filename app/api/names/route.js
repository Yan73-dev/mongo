import { connect } from '@/lib/db';
import Name from '@/lib/models/Name';

export async function GET() {
  try {
    await connect();
    const names = await Name.find({}).sort({ createdAt: -1 });
    return Response.json(names, { status: 200 });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    await connect();
    const { name } = await req.json();

    if (!name || name.trim() === '') {
      return Response.json(
        { error: 'El nombre no puede estar vacío' },
        { status: 400 }
      );
    }

    const newName = new Name({ name: name.trim() });
    await newName.save();

    return Response.json(newName, { status: 201 });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
