import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { random } from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private readonly service: AppService, private _snackBar: MatSnackBar) {
  }

  displayedColumns = ['id', 'name', 'powersRequired'];
  title = 'frontend';
  hero: any = {};
  villain: any = {};
  heroSvc = {};
  villainSvc = {};
  threats: any = [];

  ngOnInit() {
    this.service.getHeroServiceVersion().subscribe((data: any) => {
      this.heroSvc = data;
    });

    this.service.getVillainServiceVersion().subscribe((data: any) => {
      this.villainSvc = data;
    });

    this.service.getHero().subscribe((hero) => {
      this.hero = hero;
    });

    this.service.getVillain().subscribe((villain) => {
      this.villain = villain;
    });

    this.getThreats();
  }

  doEvil() {
    this.service.doEvil().subscribe(() => {
      this.getThreats();
    });
  }

  getThreats() {
    this.service.getThreats().subscribe((threats) => {
      this.threats = threats;
    });
  }

  fightThreat() {
    if (this.threats && this.threats.length > 0) {
      const randomThreat = this.threats[random(0, this.threats.length - 1)];
      this.service.fightThreat(this.hero.id, randomThreat.id).subscribe((data) => {
        if (!(data as any).success) {
          this._snackBar.open('Hero failed with fighting threats', 'Dismiss', { duration: 3000 });
        } else {
          this._snackBar.open('Hero removed threat successfully', 'Dismiss', { duration: 3000 });
          this.getThreats();
        }
      }, (err) => {
        this._snackBar.open('Hero Service Failed - Couldn\'t reach threat service', 'Dismiss', { duration: 3000 });
      });
    }
  }
}
