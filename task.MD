**┬íEn vivo desde el Streaming! "Batalla de Bigotes: Frontend && Backend"**

5 equipos, dos horas, un solo objetivo: crear la mejor aplicaci├│n web para dise├▒ar bigotes, ┬íusando Fabric.js y bajo la atenta mirada del jurado! ┬íQue comience la batalla!

**Reglas del juego:**

1. **Equipos:**  5 equipos compuestos por un desarrollador frontend y un desarrollador backend se enfrentar├ín en este desaf├¡o ├®pico.
2. **Tiempo l├¡mite:** Tendr├ín 2 horas para dise├▒ar, desarrollar y desplegar una aplicaci├│n web funcional que permita a los usuarios dibujar y guardar bigotes.
3. **Tecnolog├¡a:**  Los equipos deber├ín utilizar Fabric.js para el editor de dibujo en el frontend.
4. **Jurado experto:**  Un jurado experto (Yo jiji) evaluar├í las aplicaciones al final del streaming, teniendo en cuenta criterios como la funcionalidad, el dise├▒o, la usabilidad y la creatividad.
5. **Votaci├│n del p├║blico:**  La audiencia tambi├®n podr├í votar por su aplicaci├│n favorita a trav├®s de un sistema de votaci├│n en l├¡nea.
6. **Ganadores:**  El equipo que obtenga la mayor puntuaci├│n combinada del jurado y la audiencia ser├í declarado ganador de la "Batalla de Bigotes".

**El desaf├¡o:**

* **Frontend:** Crear una interfaz intuitiva y atractiva con un editor de dibujo (usando Fabric.js) que permita al usuario dise├▒ar bigotes con diferentes formas, colores y estilos.
* **Backend:** Desarrollar una API REST para guardar los bigotes creados por los usuarios, implementar un sistema de autenticaci├│n y asegurar la comunicaci├│n fluida con el frontend.


**┬íQue comience la batalla y que gane el mejor equipo!**

**Use Cases:**

**1.  Dibujar un bigote:**

* **Actor:** Usuario.
* **Descripci├│n:** El usuario puede dibujar un bigote en el canvas utilizando las herramientas de dibujo de Fabric.js.
* **Flujo:**
    1. El usuario accede a la aplicaci├│n web.
    2. El usuario selecciona una herramienta de dibujo (ej. l├ípiz, l├¡nea, c├¡rculo).
    3. El usuario dibuja el bigote en el canvas.
    4. El usuario puede deshacer/rehacer acciones, cambiar el color y el grosor del trazo.

**2. Guardar un bigote:**

* **Actor:** Usuario autenticado.
* **Descripci├│n:** El usuario puede guardar el bigote que ha dibujado en el servidor.
* **Flujo:**
    1. El usuario dibuja un bigote.
    2. El usuario hace clic en el bot├│n "Guardar".
    3. La aplicaci├│n env├¡a los datos del bigote (en formato JSON) al backend.
    4. El backend guarda los datos del bigote asociados al usuario.
    5. El backend env├¡a una respuesta al frontend confirmando que el bigote se ha guardado.

**3.  Autenticarse:**

* **Actor:** Usuario.
* **Descripci├│n:** El usuario puede autenticarse en la aplicaci├│n para poder guardar sus bigotes.
* **Flujo:**
    1. El usuario accede a la aplicaci├│n.
    2. El usuario hace clic en el bot├│n "Iniciar sesi├│n" o "Registrarse".
    3. El usuario introduce sus credenciales (ej. nombre de usuario y contrase├▒a).
    4. La aplicaci├│n env├¡a las credenciales al backend.
    5. El backend verifica las credenciales.
    6. Si las credenciales son v├ílidas, el backend genera un token JWT y lo env├¡a al frontend.
    7. El frontend guarda el token y lo utiliza para autenticar las solicitudes al backend.
