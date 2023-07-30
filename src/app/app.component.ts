import { Component } from '@angular/core';
import { ConfigService } from './config.service';
import { Config } from './config.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'merch';
  config: Config | undefined;

  constructor(private configService: ConfigService) {}

  ngOnInit() {
    this.configService.getConfig().subscribe((config) => {
      this.config = config;
    });
  }
}
