
const persona = {
cognomen: 'Guzman',
aetas: 45,
ubiHabitat: {
urbs:'Adrogue',
zip:'1846',
lat:'25687',
long:'1127'
}

}

//const persona2 = persona;

const persona2 = {...persona};

persona2.cognomen = 'Parker';

console.log(persona);
console.log(persona2);