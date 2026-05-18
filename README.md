INSTRUCCIONES DE PRUEBAS Y EJECUCION
una vez clonada la carpeta del analizador, para poder realizar la prueba con los 4 archivos txt hay que dirigirse a .vscode/launch.json .
En la línea 9, dentro del apartado de "input", debemos cambiar el nombre de cada archivo que se desee revisar:

    correcto1.txt

    correcto2.txt

    incorrecto1.txt

    incorrecto2.txt

ahora tenemos que mantener abierto en las ventanas al "gloqueador.g4" y "index.js" presionar F5 para iniciar la depuracion y mostrar el diagrama de arbol
y en el apartado debug console apareceran los tokens, errores y el arbol sintactico en formato de texto