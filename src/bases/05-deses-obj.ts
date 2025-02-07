
interface Heros {
    nomen:string;
    aetas:number;
    codeNomen:string;
    facultatem?:string;

}


export const persona:Heros = {
    nomen: 'Tony',
    aetas:45,
    codeNomen:'IronMan',
    //facultatem:'money',
    
}



const {nomen, aetas, facultatem = "No tiene Poder" } = persona;

console.log(nomen, aetas, facultatem);