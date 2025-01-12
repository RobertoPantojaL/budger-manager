# Gestor de Presupuesto Personal

Una aplicación web interactiva para gestionar ingresos, gastos y visualizar el estado financiero personal. Ofrece la capacidad de agregar transacciones, realizar filtrados, guardar los datos en el navegador y exportarlos a Excel.

---
## 🚀 Funcionalidades

### **1. Gestión de Transacciones**
- Agrega ingresos y gastos con detalles como monto, fecha y categoría.
- Visualización detallada de las transacciones realizadas.

### **2. Resumen Financiero**
- Calcula y muestra:
  - Ingresos totales.
  - Gastos totales.
  - Balance neto.

### **3. Persistencia de Datos**
- Los datos de las transacciones se guardan automáticamente en el navegador usando `localStorage`.
- Los datos se conservan incluso después de recargar la página o cerrar el navegador.

### **4. Exportación a Excel**
- Permite exportar las transacciones en formato `.xlsx` para análisis externos.
- Genera un archivo llamado `transacciones.xlsx` con toda la información.

### **5. Interfaz Amigable**
- Diseño moderno y responsivo.
- Componentes modulares para facilitar la navegación y el uso.

## 🛠️ Tecnologías Aplicadas

### **Frontend**
- **React**: Framework utilizado para crear componentes modulares y manejar el estado de la aplicación.
- **JavaScript (ES6+)**: Para la lógica de la aplicación y manipulación del estado.
- **CSS**: Para estilizar la interfaz de usuario.

### **Librerías Adicionales**
- **Vite**: Herramienta de desarrollo utilizada para crear el entorno de React.
- **xlsx**: Librería utilizada para generar y descargar archivos Excel.

### **Otras Tecnologías**
- **LocalStorage**: Almacenamiento local para guardar transacciones en el navegador.
- **Google Fonts**: Uso de la fuente "Roboto" para un diseño moderno y limpio.

## 📂 Estructura del Proyecto

```plaintext
budget-manager/
├── src/
│   ├── components/
│   │   ├── Header.jsx            // Encabezado de la aplicación
│   │   ├── Summary.jsx           // Resumen de ingresos, gastos y balance
│   │   ├── TransactionForm.jsx   // Formulario para agregar transacciones
│   │   ├── TransactionList.jsx   // Lista de transacciones
│   │   └── ExportToExcel.jsx     // Botón para exportar a Excel
│   ├── App.jsx                   // Componente principal
│   ├── main.jsx                  // Punto de entrada
│   └── App.css                   // Estilos globales
├── package.json                  // Configuración del proyecto
├── index.html                    // Archivo HTML principal
└── README.md                     // Documentación del proyecto
```

## 🚀 Instalación

1. **Clona este repositorio**:
   ```bash
        git clone https://github.com/tu-usuario/budget-manager.git
    ```
2. **Instala las dependencias**:
     ```bash
        cd budget-manager
        npm install
    ```
3. **Inicia el servidor de desarrollo**:
     ```bash
         npm run dev

    ```
4. **Abre la aplicación en tu navegador en la liga que te proporcione el servidor de desarrollo**

  ```bash
  
        > budget-manager@0.0.0 dev
        > vite


          VITE v6.0.7  ready in 410 ms

          ➜  Local:   http://localhost:5173/
          ➜  Network: use --host to expose
          ➜  press h + enter to show help
  ```

## 📋 Uso

1. **Agregar Transacciones:**
   - Completa el formulario con los detalles de una transacción (monto, fecha y categoría).
   - Haz clic en "Agregar" para registrar la transacción.

2. **Visualizar Resumen:**
   - El resumen financiero se muestra en la parte superior de la aplicación, con el total de ingresos, gastos y el balance.

3. **Exportar a Excel:**
   - Haz clic en el botón "Exportar a Excel" para generar un archivo `.xlsx` con las transacciones.

4. **Guardar Datos:**
   - Las transacciones se guardan automáticamente en `localStorage`, lo que asegura que los datos se mantengan incluso después de cerrar el navegador.

---

## 📦 Dependencias Clave

```json
          "dependencies": {
          "react": "^18.2.0",
          "react-dom": "^18.2.0",
          "vite": "^4.0.0",
          "xlsx": "^0.18.5"
        }
```
## 📚 Recursos Adicionales

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Vite Documentation](https://vitejs.dev/)
- [SheetJS Documentation](https://github.com/SheetJS/sheetjs)
- [MDN LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

---

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si tienes ideas para mejorar la aplicación, no dudes en abrir un issue o un pull request.

---

## 📝 Licencia

Este proyecto está licenciado bajo la [MIT License](LICENSE).

---

## 👨‍💻 Autor

- **Tadeo Roberto Pantoja López**  
  [GitHub](https://github.com/tu-usuario) | [LinkedIn](https://www.linkedin.com/in/tu-perfil)
