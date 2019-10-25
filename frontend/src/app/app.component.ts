import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private readonly service: AppService) {
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
      this.service.fightThreat(this.hero.id, this.threats[0].id).subscribe(() => {
        this.getThreats();
      });
    }
  }
}
