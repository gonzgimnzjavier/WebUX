import { horario } from './horario.js';

// Objeto con los horarios para cada día de la semana
// const horario = [
//     { time: '13:00 - 1:00' },
//     { time: '13:00 - 1:00' },
//     { time: '13:00 - 1:00' },
//     { time: '13:00 - 1:00' },
//     { time: '13:00 - 1:00' },
//     { time: '13:00 - 1:00' },
//     { time: 'Cerrado' }
// ];

// Función para actualizar los span del horario en el contenedor
const actualizarHorario = () => {
    const listHoursArray = document.body.querySelectorAll('.list-hours li');

    // Itera sobre los días de la semana y actualiza los span
    for (let i = 0; i < horario.length; i++) {
        const spanElement = listHoursArray[i].querySelector('.ms-auto');
        spanElement.textContent = horario[i].time;
    }
}

// Llama a la función después de que el DOM se haya cargado
window.addEventListener('DOMContentLoaded', event => {
    // Actualiza el horario
    actualizarHorario();

    // Pilla el día de la semana
    let currentDay = new Date().getDay();
    currentDay = currentDay === 0 ? 6 : currentDay - 1;

    // Añade la clase 'today' al día actual
    const listHoursArray = document.body.querySelectorAll('.list-hours li');
    listHoursArray[currentDay].classList.add('today');
});
