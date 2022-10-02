import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureOneComponent } from './feature-one/feature-one.component';
import { NgxsModule } from '@ngxs/store';
import { FeatureState } from './feature.state';

@NgModule({
    declarations: [FeatureOneComponent],
    imports: [CommonModule, NgxsModule.forFeature([FeatureState])]
})
export class FeatureModule {}
