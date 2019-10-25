import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class AppService {

    constructor(private http: HttpClient) { }

    getHero() {
        return this.http.get('/api/hero-service/heroes/1');
    }

    getVillain() {
        return this.http.get('/api/villain-service/villains/1');
    }

    getHeroServiceVersion() {
        return this.http.get('/api/hero-service/version');
    }

    getVillainServiceVersion() {
        return this.http.get('/api/villain-service/version');
    }

    getThreats() {
        return this.http.get('/api/threat-service/threats');
    }

    fightThreat(heroId, threatId) {
        return this.http.post('/api/hero-service/heroes/fight-threat', { heroId, threatId });
    }

    doEvil() {
        return this.http.post('/api/villain-service/villains/doEvil', {});
    }
}
