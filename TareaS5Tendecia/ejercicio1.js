const fs = require('fs');

// Función para encontrar el día con la menor diferencia de temperatura
function findDayWithSmallestTempSpread(filePath) {
    // Leer el archivo de manera síncrona
    const data = fs.readFileSync(filePath, 'utf8');
    
    // Dividir los datos en líneas y eliminar las líneas en blanco
    const lines = data.trim().split('\n').filter(line => line.trim() !== '');

    // Variables para rastrear el día con la menor diferencia de temperatura
    let minSpread = Infinity;
    let minSpreadDay = null;

    // Iterar sobre cada línea de datos, omitiendo las líneas de encabezado
    for (let i = 2; i < lines.length; i++) {
        const parts = lines[i].trim().split(/\s+/);
        
        // Extraer el día, la temperatura máxima y mínima
        const day = parseInt(parts[0]);
        const maxTemp = parseInt(parts[1]);
        const minTemp = parseInt(parts[2]);

        // Calcular la diferencia de temperatura
        const spread = maxTemp - minTemp;

        // Actualizar el día con la menor diferencia de temperatura si es necesario
        if (spread < minSpread) {
            minSpread = spread;
            minSpreadDay = day;
        }
    }

    // Devolver el resultado
    return minSpreadDay;
}

// Ruta al archivo weather.dat
const filePath = 'weather.dat';

// Llamar a la función y mostrar el resultado
const result = findDayWithSmallestTempSpread(filePath);
console.log(`El día con la menor diferencia de temperatura es: ${result}`);
