// Definición de variables
const disponibles = 10;
let reservadas = 0;

// Función para reservar una hora
const reservarHora = () => {
  if (disponibles > 0) {
    disponibles--;
    reservadas++;
    console.log("Hora reservada exitosamente.");
  } else {
    console.log("No hay horas disponibles.");
  }
};

// Función para cancelar una reserva de hora
const cancelarReserva = () => {
  if (reservadas > 0) {
    disponibles++;
    reservadas--;
    console.log("Reserva cancelada exitosamente.");
  } else {
    console.log("No hay reservas para cancelar.");
  }
};

// Función para mostrar el estado actual de las horas
const mostrarEstado = () => {
  console.log(`Horas disponibles: ${disponibles}`);
  console.log(`Horas reservadas: ${reservadas}`);
};

// Ejecución de las funciones
mostrarEstado();
reservarHora();
mostrarEstado();
cancelarReserva();
mostrarEstado();
