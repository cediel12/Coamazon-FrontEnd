import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { ThemeModule } from '../../@theme/theme.module';
import { ECommerceComponent } from './e-commerce.component';
import { ChartModule } from 'angular2-chartjs';
import { ECommerceProgressSectionComponent } from './progress-section/progress-section.component';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@NgModule({
  imports: [
    ThemeModule,
    ChartModule,
    NgxEchartsModule,
    NgxChartsModule,
    LeafletModule,
  ],
  declarations: [
    ECommerceComponent,
    ECommerceProgressSectionComponent,
  ],
  providers: [
  ],
})
export class ECommerceModule { }
