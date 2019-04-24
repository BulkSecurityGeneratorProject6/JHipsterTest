export interface IStudent {
    id?: number;
    martikelnummer?: number;
    nachname?: string;
    vorname?: string;
    strasse?: string;
    hausnummer?: string;
    postleitzahl?: number;
    ort?: string;
}

export class Student implements IStudent {
    constructor(
        public id?: number,
        public martikelnummer?: number,
        public nachname?: string,
        public vorname?: string,
        public strasse?: string,
        public hausnummer?: string,
        public postleitzahl?: number,
        public ort?: string
    ) {}
}
