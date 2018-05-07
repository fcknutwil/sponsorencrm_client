export class FileInput {
  constructor(private _files: File[], private delimiter: string = ", ") {
    this._fileNames = this._files.map((f: File) => f.name).join(delimiter);
  }

  private _fileNames;

  get fileNames(): string {
    return this._fileNames;
  }

  get files() {
    return this._files || [];
  }
}
