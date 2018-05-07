import {Injectable} from "@angular/core";

@Injectable()
export class StorageService {

  public set(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  public get(key: string) {
    return localStorage.getItem(key);
  }

  public remove(key: string) {
    localStorage.removeItem(key);
  }

}
