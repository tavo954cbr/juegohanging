let words = [
    'PETERBU',
    'COCOWASH',
    'NIO',
    'CELULAR',
    'DICLOXACILINA',
    'PROCRASTINAR',
    'DIGIEVOLUCION',
    'CAPULETO',
    'TYPESCRIPT',
    'LOVE',
];


export function getRandomWord() {

    const randomIndex = Math.floor( Math.random() * words.length );

    return words[randomIndex];

}