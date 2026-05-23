import mongoose, { Schema, Document } from 'mongoose';

export interface IName extends Document {
  name: string;
  createdAt: Date;
}

const nameSchema = new Schema<IName>(
  {
    name: {
      type: String,
      required: [true, 'El nombre es requerido'],
      trim: true,
      minlength: [1, 'El nombre no puede estar vacío'],
      maxlength: [100, 'El nombre no puede exceder 100 caracteres'],
    },
  },
  {
    timestamps: true,
  }
);

const Name = mongoose.models.Name || mongoose.model<IName>('Name', nameSchema);

export default Name;
