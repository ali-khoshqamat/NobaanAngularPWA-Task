import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VibrateCameraComponent } from './vibrate-camera/vibrate-camera.component';

const routes: Routes = [
  // { path: 'vibrate-camera', component: VibrateCameraComponent },
  { path: '', component: VibrateCameraComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
