# 📝 Gestor de Nombres con Next.js y PostgreSQL

Una aplicación web moderna para guardar y visualizar nombres utilizando Next.js, PostgreSQL y API Routes.

## 🚀 Características

- ✅ Interfaz moderna y responsiva
- ✅ Guardar nombres en PostgreSQL
- ✅ Visualizar todos los nombres guardados
- ✅ Validación de datos
- ✅ Mensajes de confirmación
- ✅ Diseño atractivo con gradientes
- ✅ Base de datos relacional confiable

## 📋 Requisitos

- Node.js 18+ 
- npm o yarn
- PostgreSQL 12+ instalado localmente o cuenta en un servidor PostgreSQL

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

### 3. Configura PostgreSQL

#### Opción A: PostgreSQL Local

1. Asegúrate de tener PostgreSQL instalado
2. Crea una base de datos:
```bash
creatdb nombres-db
```

3. Edita el archivo `.env.local` con tu conexión local:
```env
DATABASE_URL=postgresql://usuario:contraseña@localhost:5432/nombres-db
```

#### Opción B: PostgreSQL en la Nube (Vercel, Railway, Supabase)

1. Ve a [Supabase](https://supabase.com) o [Railway](https://railway.app)
2. Crea un proyecto nuevo
3. Copia tu connection string
4. Pégalo en `.env.local`:
```env
DATABASE_URL=postgresql://usuario:contraseña@host:puerto/nombres-db
```

### 4. Ejecuta el servidor de desarrollo

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`

La tabla de nombres se creará automáticamente en la primera petición.

## 📱 Uso

1. **Ingresa un nombre** en el campo de texto
2. **Haz clic en "Enviar"** para guardar el nombre en la base de datos
3. **Haz clic en "Ver Nombres"** para actualizar y mostrar todos los nombres guardados
4. Los nombres aparecerán en formato h1 en azul

## 📁 Estructura del Proyecto

```
mongo/
├── app/
│   ├── api/
│   │   └── names/
│   │       └── route.js            # API routes (GET y POST)
│   ├── layout.tsx                  # Layout principal
│   ├── page.tsx                    # Página principal
│   ├── page.module.css             # Estilos de la página
│   └── globals.css                 # Estilos globales
├── lib/
│   └── db.js                       # Conexión a PostgreSQL
├── .env.local                      # Variables de entorno
├── next.config.js                  # Configuración de Next.js
├── tsconfig.json                   # Configuración de TypeScript
└── package.json                    # Dependencias
```

## 🛠️ Tecnologías Utilizadas

- **Next.js 14** - Framework React
- **PostgreSQL** - Base de datos relacional
- **pg** - Driver de PostgreSQL para Node.js
- **CSS Modules** - Estilos encapsulados

## 📦 Dependencias Principales

```json
{
  "next": "^14.0.0",
  "react": "^18.2.0",
  "pg": "^8.11.0"
}
```

## 🌐 Desplegar en Vercel

1. Push tu código a GitHub
2. Ve a [Vercel](https://vercel.com)
3. Haz clic en "New Project"
4. Selecciona tu repositorio
5. En **Environment Variables**, agrega:
   ```
   DATABASE_URL = [tu connection string de PostgreSQL]
   ```
6. Haz clic en "Deploy"

## 📝 API Endpoints

### GET /api/names
Obtiene todos los nombres guardados

**Respuesta:**
```json
[
  {
    "id": 1,
    "name": "Jose",
    "created_at": "2024-01-15T10:30:00Z"
  }
]
```

### POST /api/names
Guarda un nuevo nombre

**Body:**
```json
{
  "name": "Jose"
}
```

**Respuesta:**
```json
{
  "id": 1,
  "name": "Jose",
  "created_at": "2024-01-15T10:30:00Z"
}
```

## 🐛 Solución de Problemas

### Error: DATABASE_URL no está definido
- Asegúrate de crear el archivo `.env.local` en la raíz del proyecto
- Verifica que la variable `DATABASE_URL` esté correctamente configurada

### Error: Conexión rechazada
- Verifica que PostgreSQL esté corriendo (`sudo service postgresql status`)
- Comprueba que las credenciales sean correctas
- Asegúrate de que la base de datos exista

### Error: "relation \"names\" does not exist"
- La tabla se crea automáticamente. Si el error persiste, ejecuta:
```bash
node -e "require('./lib/db.js').initDB()"
```

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

---

**Hecho con ❤️ por Yan73-dev**
