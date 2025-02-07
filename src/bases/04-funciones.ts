function salutate(nomen: string) {
    console.log()
    return `Hola ${nomen}`;
}

const salutate2 = (nomen:string):string => { `Hola ${nomen}`;}

//console.log (salutate2 ('Pointer'))

const obtenerUsuarios = (uid: string):{uid:string, nomen:string} => ({
        uid,
        nomen: 'tony001'
    })

 console.log(obtenerUsuarios("perro"));

 const heroum = [
    {
        uid:1,
        nomen:'Batman',
        poder:'dinero'
    },  
    {
        uid:2,
        nomen:'Superman'
    },
 ];

 const heros = heroum.find(item => item.uid === 1)

