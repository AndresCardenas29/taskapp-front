# Task App - Documentación Técnica

## Justificación de la elección de tecnologías

Este proyecto utiliza **Nuxt 3** (basado en Vue 3) como framework principal para el frontend. Nuxt fue elegido por su robustez, facilidad de configuración, soporte para SSR/SSG y excelente integración con el ecosistema Vue.  
Se emplea **fetch API** para la comunicación con el backend, por su simplicidad y compatibilidad nativa.  
Para el almacenamiento local, se utiliza **localStorage** por su facilidad de uso y porque los requerimientos de persistencia no demandan una base de datos compleja como IndexedDB.

## Descripción de la implementación de la sincronización offline/online

La aplicación está diseñada para funcionar tanto en modo online como offline:

- Cuando el usuario crea, edita o elimina tareas sin conexión, estas operaciones se almacenan localmente y se marcan como pendientes de sincronización (`pendingSync: true`).
- Al recuperar la conexión, la app detecta el estado online y automáticamente intenta sincronizar las tareas pendientes con el backend usando un endpoint especial (`/tasks/sync`).
- La sincronización se realiza periódicamente (cada 30 segundos) y también puede ser forzada manualmente por el usuario.
- El estado de conexión con el servidor se muestra en tiempo real en la interfaz.

## Detalles técnicos relevantes

### Almacenamiento local

- **localStorage** se utiliza para guardar el estado de las tareas. Cada vez que hay un cambio en la lista de tareas, se actualiza el almacenamiento local.
- Al iniciar la app, primero se cargan las tareas desde localStorage para garantizar disponibilidad inmediata, incluso sin conexión.

### Sincronización y políticas de reintento

- La app implementa un mecanismo de reintento automático: cada 30 segundos verifica el estado del servidor y, si está disponible, intenta sincronizar las tareas pendientes.
- Si la sincronización falla, las tareas permanecen marcadas como `pendingSync` y se reintenta en el siguiente ciclo.
- El usuario puede forzar la sincronización manualmente desde la interfaz.

### Manejo de errores

- Todas las operaciones de red están envueltas en bloques `.catch()` para capturar errores y evitar que la app se bloquee.
- Si una operación de sincronización falla, la tarea permanece en el estado local y se informa visualmente al usuario (por ejemplo, con un badge "Sin sincronizar").
- Si el backend no está disponible, la app sigue funcionando en modo offline y permite al usuario continuar gestionando tareas.

### Consideraciones sobre IndexedDB

- Aunque IndexedDB es más robusto para almacenamiento offline avanzado, en este caso se optó por localStorage por simplicidad y porque el volumen de datos es bajo. Si el proyecto creciera en complejidad, sería recomendable migrar a IndexedDB.

---

## Instrucciones para ejecutar el proyecto

### 1. Clona el repositorio

```bash
git clone https://github.com/AndresCardenas29/taskapp-front.git
cd frontend
```

### 2. Instala las dependencias

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

### 3. Configura las variables de entorno

Crea el archivo `frontend/config/env.js` y define la URL de tu backend:

```js
export const BACKEND_URL = "http://localhost:3001"; // Cambia el puerto si tu backend usa otro
```

### 4. Inicia el servidor de desarrollo

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

### 5. Construcción para producción

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Para previsualizar la build de producción:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

---

**Resumen:**  
La aplicación garantiza una experiencia fluida tanto online como offline, priorizando la simplicidad y la robustez en el manejo de datos y sincronización. El usuario siempre puede interactuar con sus tareas, y la app se encarga de mantener los datos consistentes con el backend cuando la conexión lo permite.
Aunque es una prueba técnica, tengo pensado en seguir mejorandola ya que se me ocurrieron varias ideas para implementar, limpiar el código, mejorar la experiencia de usuario y quiero agregar un sistema de usuarios para que no sea monousuario sino que multiusario implementando oAuth y credenciales. 