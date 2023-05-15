export class Experiencia {
    id? : number;
    nombrE : string;
    descripcionE: string;
    titlE: string;
    typE: 'ex'|'ed';
    datE: string;

    constructor(nombrE: string, descripcionE: string, titlE: string, typE: 'ex'|'ed', datE:string){
        this.nombrE = nombrE;
        this.descripcionE = descripcionE;
        this.titlE = titlE;
        this.typE = typE;
        this.datE = datE;
    }
}
