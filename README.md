# 📝 Gestor de Nombres con Next.js y MongoDB

Una aplicación web moderna para guardar y visualizar nombres utilizando Next.js, MongoDB y API Routes.

## 🚀 Características

- ✅ Interfaz moderna y responsiva
- ✅ Guardar nombres en MongoDB
- ✅ Visualizar todos los nombres guardados
- ✅ Validación de datos
- ✅ Mensajes de confirmación
- ✅ Diseño atractivo con gradientes
- ✅ Código optimizado en JavaScript

## 📋 Requisitos

- Node.js 18+ 
- npm o yarn
- Cuenta en MongoDB Atlas (gratuita)

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

### 3. Configura MongoDB

1. Ve a [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Crea una cuenta gratuita
3. Crea un cluster
4. Haz clic en "Connect" y copia la connection string
5. Edita el archivo `.env.local` y reemplaza:
   - `tu_usuario`: Tu usuario de MongoDB
   - `tu_contraseña`: Tu contraseña
   - `cluster.mongodb.net`: Tu URL del cluster

```env
MONGODB_URI=mongodb+srv://tu_usuario:tu_contraseña@cluster.mongodb.net/nombres-db?retryWrites=true&w=majority
```

### 4. Ejecuta el servidor de desarrollo

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`

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
│   ├── layout.tsx                   # Layout principal
│   ├── page.tsx                     # Página principal
│   ├── page.module.css              # Estilos de la página
│   ├── globals.css                  # Estilos globales
├── lib/
│   ├── db.js                        # Conexión a MongoDB
│   └── models/
│       └── Name.js                  # Modelo de datos
├── .env.local                       # Variables de entorno
├── next.config.js                   # Configuración de Next.js
├── tsconfig.json                    # Configuración de TypeScript
└── package.json                     # Dependencias
```

## 🛠️ Tecnologías Utilizadas

- **Next.js 14** - Framework React
- **MongoDB** - Base de datos NoSQL
- **Mongoose** - ODM para MongoDB
- **CSS Modules** - Estilos encapsulados

## 📦 Dependencias Principales

```json
{
  "next": "^14.0.0",
  "react": "^18.2.0",
  "mongoose": "^8.0.0"
}
```

## 🌐 Desplegar en Vercel

1. Push tu código a GitHub
2. Ve a [Vercel](https://vercel.com)
3. Haz clic en "New Project"
4. Selecciona tu repositorio
5. Agrega las variables de entorno en "Environment Variables"
6. Haz clic en "Deploy"

## 📝 API Endpoints

### GET /api/names
Obtiene todos los nombres guardados

**Respuesta:**
```json
[
  {
    "_id": "123456",
    "name": "Jose",
    "createdAt": "2024-01-15T10:30:00Z"
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
  "_id": "123456",
  "name": "Jose",
  "createdAt": "2024-01-15T10:30:00Z"
}
```

## 🐛 Solución de Problemas

### Error: MONGODB_URI no está definido
- Asegúrate de crear el archivo `.env.local` en la raíz del proyecto
- Verifica que la variable `MONGODB_URI` esté correctamente configurada

### Error: Conexión rechazada
- Verifica que tu IP esté en la whitelist de MongoDB Atlas
- Comprueba que las credenciales sean correctas

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

---

**Hecho con ❤️ por Yan73-dev**
