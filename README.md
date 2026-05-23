# 📝 Gestor de Contenido con Next.js y Supabase

Una aplicación web moderna para gestionar contenido utilizando Next.js, Supabase y API Routes en tiempo real.

## 🚀 Características

- ✅ Interfaz moderna y responsiva
- ✅ Guardar contenido en Supabase (tabla Ace)
- ✅ Visualizar todos los elementos guardados en tiempo real
- ✅ Validación de datos
- ✅ Mensajes de estado
- ✅ Diseño atractivo con gradientes
- ✅ Integración con Supabase SSR

## 📋 Requisitos

- Node.js 18+ 
- npm o yarn
- Cuenta en Supabase (gratuita)

## 🔧 Instalación

### 1. Clona el repositorio

```bash
git clone https://github.com/Yan73-dev/mongo.git
cd mongo
```

### 2. Instala las dependencias

```bash
npm install
```

### 3. Configura Supabase

El proyecto ya está configurado con tu Supabase:

- URL: `https://jesmqaklynxgjqrhqovo.supabase.co`
- Key Publicable: `sb_publishable_r06HHNG5UBN3qLsJkbm-5g_aD1MYt7m`
- Tabla: `Ace`
- Columna principal: `user`

### 4. Ejecuta el servidor de desarrollo

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`

## 📱 Uso

1. **Ingresa un valor** en el campo de texto
2. **Haz clic en "Guardar"** para guardar el contenido en la tabla Ace de Supabase
3. **Haz clic en "Ver Elementos"** para actualizar y mostrar todos los valores guardados en la columna user
4. Los elementos aparecerán con su fecha de creación

## 📁 Estructura del Proyecto

```
mongo/
├── app/
│   ├── layout.tsx                    # Layout principal
│   ├── page.tsx                      # Página principal
│   ├── page.module.css               # Estilos de la página
│   └── globals.css                   # Estilos globales
├── lib/
│   └── supabase.js                   # Cliente de Supabase
├── .env.local                        # Variables de entorno
├── next.config.js                    # Configuración de Next.js
├── tsconfig.json                     # Configuración de TypeScript
└── package.json                      # Dependencias
```

## 🛠️ Tecnologías Utilizadas

- **Next.js 14** - Framework React
- **Supabase** - Backend como servicio (BaaS)
- **@supabase/supabase-js** - Cliente JavaScript de Supabase
- **@supabase/ssr** - Utilidades para SSR con Supabase
- **CSS Modules** - Estilos encapsulados

## 📦 Dependencias Principales

```json
{
  "next": "^14.0.0",
  "react": "^18.2.0",
  "@supabase/supabase-js": "^2.38.0",
  "@supabase/ssr": "^0.0.11"
}
```

## 🌐 Desplegar en Vercel

1. Push tu código a GitHub
2. Ve a [Vercel](https://vercel.com)
3. Haz clic en "New Project"
4. Selecciona tu repositorio
5. En **Environment Variables**, agrega:
   ```
   NEXT_PUBLIC_SUPABASE_URL = https://jesmqaklynxgjqrhqovo.supabase.co
   NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY = sb_publishable_r06HHNG5UBN3qLsJkbm-5g_aD1MYt7m
   ```
6. Haz clic en "Deploy"

## 📝 API de Supabase

### Tabla: Ace

**Columnas:**
- `id` - Identificador único (INTEGER, PRIMARY KEY, AUTO INCREMENT)
- `user` - Contenido del usuario (TEXT)
- `created_at` - Fecha de creación (TIMESTAMP, DEFAULT: CURRENT_TIMESTAMP)

### Operaciones

**Obtener todos los elementos:**
```javascript
const { data } = await supabase
  .from('Ace')
  .select('id, user, created_at')
  .order('created_at', { ascending: false });
```

**Insertar un nuevo elemento:**
```javascript
const { data } = await supabase
  .from('Ace')
  .insert([{ user: 'tu_contenido' }])
  .select();
```

## 🐛 Solución de Problemas

### Error: NEXT_PUBLIC_SUPABASE_URL no está definido
- Asegúrate de crear el archivo `.env.local` en la raíz del proyecto
- Verifica que las variables estén correctamente configuradas

### Error: "relation \"Ace\" does not exist"
- Crea la tabla `Ace` en tu proyecto Supabase con las columnas especificadas
- O ejecuta el SQL en el editor de Supabase:
```sql
CREATE TABLE Ace (
  id SERIAL PRIMARY KEY,
  user TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Error: Permiso denegado
- Verifica que la tabla Ace tenga habilitado el acceso público en Supabase
- Ve a: Editor SQL → Nueva consulta → RLS Policies

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

---

**Hecho con ❤️ por Yan73-dev**
