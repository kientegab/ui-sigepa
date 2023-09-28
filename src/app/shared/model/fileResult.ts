export interface IFileResult {
    id?: number;
    url?: string;
}

export class FileResult implements IFileResult{
    constructor(
        public id?: number,
        public url?: string,
    ) {}
}
