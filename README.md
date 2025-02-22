# 🚀 Challenge V3 - Backend

Este es el backend de la aplicación **challenge-v3-frontend**, desarrollado con **NestJS** y **MongoDB**. Su propósito es gestionar precios especiales de productos asignados a usuarios en un entorno de administración.

## 📌 Características

- 🌐 **API RESTful** con NestJS
- 🛢️ **Base de datos MongoDB** usando Mongoose
- 🔄 **Soft delete** para preservar registros eliminados
- ⚡ **Tipado estático** con TypeScript para mayor seguridad y escalabilidad
- 🏗️ **Arquitectura modular** para facilitar el mantenimiento y la expansión

## 🛠️ Instalación y configuración

1. **Clona el repositorio**:
    ```sh
    git clone https://github.com/LeMonsalve/challenge-v3-backend.git
    cd backend
    ```

2. **Instala las dependencias**:
    ```sh
    pnpm install
    ```

3. **Configura las variables de entorno** en `.env`:
    ```env
    MODE=
    PORT=
    HOST=
    MONGO_URL=
    CLIENT_URL=

    INITIAL_PRODUCTS_COUNT=
    INITIAL_USERS_COUNT=
    ```

4. **Ejecuta el servidor**:

    - **Modo desarrollo**:
      ```sh
      pnpm run start:dev
      ```
    - **Modo producción**:
      ```sh
      pnpm run start:prod
      ```

## 🛠️ ¿Por qué usamos NestJS y TypeScript?

- **Modularidad**: NestJS permite organizar el código en módulos reutilizables.
- **Manejo de dependencias**: Usa el sistema de inyección de dependencias de Angular.
- **Soporte para TypeScript**: Mejora la seguridad y escalabilidad del código.
- **Facilidad para pruebas**: Estructura clara para testing unitario y e2e.

## ✅ Próximos pasos
- 🚀 Agregar autenticación y autorización (si se requiere en futuras versiones)
- 📊 Mejorar logs y métricas para depuración
- 🛠️ Implementar validaciones avanzadas en los datos

---

🔥 **¡Server en producción!** 🚀
- https://challenge-v3-backend-production.up.railway.app