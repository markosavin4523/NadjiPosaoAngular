import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "../business-logic/auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor
{
  constructor(
    private authService: AuthService
  ) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(!this.authService.getJwtToken())
    {
      return next.handle(req);
    }
    const modifyReq = this.prepareRequest(req);
    return next.handle(modifyReq);
  }

  prepareRequest(req: HttpRequest<any>)
  {
    return req.clone({
      setHeaders: {
        Authorization: "Bearer " + this.authService.getJwtToken()
      }
    })
  }

}
