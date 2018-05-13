// const app = document.querySelector('#app');
// const cellSize = 85; // for performance issues we need to keep the cells pretty big!
// const cols = Math.ceil(window.innerWidth / cellSize);
// const rows = Math.ceil(window.innerHeight / cellSize);

// // console.log(image);

// // Fill the Grid wil Cells
// for (let i = 0; i < rows; i++) {
//     const row = document.createElement('div');
//     row.classList.add('row');
//     for (let j = 0; j < cols; j++) {
//         // Create each cell
//         const el = document.createElement('div');
//         el.classList.add('card');
//         el.style.width = `${cellSize}px`;
//         el.style.height = `${cellSize}px`;
//         // Create the arrow image
//         const image = document.createElement('img');
//         image.src = 'https://image.flaticon.com/icons/svg/109/109617.svg';
//         el.appendChild(image);

//         // Append the new cell
//         row.appendChild(el);
//     }
//     app.appendChild(row);
// }

// const allCells = document.querySelectorAll('.card');

// document.addEventListener('mousemove', e => {
//     const currentPosition = { x: e.pageX, y: e.pageY };

//     allCells.forEach(el => {
//         const cellCoords = getElementPosition(el);
//         const angle = getAngle(cellCoords, currentPosition);
//         el.style.transform = `rotate(${angle}deg)`;
//     });
// });

// function getElementPosition(el) {
//     const elInfo = el.getBoundingClientRect();
//     // We need to add half of the element width and height because getBoundingClientRect calculate form the edges
//     const elHalfWidth = el.offsetWidth / 2;
//     const elLocation = {
//         x: elInfo.left + elHalfWidth,
//         y: elInfo.top + elHalfWidth
//     };

//     return elLocation;
// }

// function getAngle(p1, p2) {
//     return Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180 / Math.PI;
// }