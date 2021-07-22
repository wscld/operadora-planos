import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CacheService } from '../services/cache-service/cache.service';

@Injectable()
export class CachingInterceptor implements HttpInterceptor {

    constructor(private readonly cacheService: CacheService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.method !== 'GET') {
            return next.handle(req);
        }

        if (!req.headers.get('cache-response')) {
            if (this.cacheService.cacheMap.get(req.urlWithParams)) {
                this.cacheService.cacheMap.delete(req.urlWithParams);
            }
            return next.handle(req);
        }

        const cachedResponse = this.cacheService.getFromCache(req);
        if (cachedResponse) {
            return (cachedResponse instanceof Observable) ? cachedResponse : of(cachedResponse.clone());
        }

        return next.handle(req)
            .pipe(tap(event => {
                if (event instanceof HttpResponse) {
                    this.cacheService.addToCache(req, event);
                }
            }));
    }
}