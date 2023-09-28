export interface IProfilImage {
    file?: File;
    height?: number;
    width?: number;
}

export class ProfilImage implements IProfilImage {
    constructor(
        public file?: File,
        public height?: number,
        public width?: number){}
    }