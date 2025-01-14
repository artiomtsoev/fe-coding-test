import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _token: string = '4aa328bf220613778485d12733c17d2f7256988780c620fad7d5682bd807b9e0';

  constructor() { }

  public get token(): string {
    return this._token;
  }

  public isAuthenticated(): boolean {
    return true;
  }

}
