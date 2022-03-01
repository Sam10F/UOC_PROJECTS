import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { StoreModule, ActionReducer, MetaReducer } from "@ngrx/store";
import { localStorageSync } from "ngrx-store-localstorage";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../environments/environment";
import { appReducers } from "./app.reducers";
import { clearStateMetaReducer } from "./shared/profile/reducers/profile.reducer";
import { TeacherHeaderComponent } from "./teacher/components/teacher-header/teacher-header.component";
import { StudentHeaderComponent } from "./student/components/student-header/student-header.component";
import { StudentsViewComponent } from "./shared/components/students-view/students-view.component";
import { LessonsViewComponent } from "./shared/components/lessons-view/lessons-view.component";
import { ExercisesViewComponent } from "./shared/components/exercises-view/exercises-view.component";
import { AuthInterceptor } from "./shared/interceptors/auth.interceptor";
import { SharedModule } from "./shared/shared.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SuperuserHeaderComponent } from "./superuser/components/superuser-header/superuser-header.component";

export function localStorageSyncReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return localStorageSync({ keys: ["User", "Login"], rehydrate: true })(
    reducer
  );
}
const metaReducers: Array<MetaReducer<any, any>> = [
  localStorageSyncReducer,
  clearStateMetaReducer,
];

@NgModule({
  declarations: [
    AppComponent,
    SuperuserHeaderComponent,
    TeacherHeaderComponent,
    StudentHeaderComponent,
    StudentsViewComponent,
    LessonsViewComponent,
    ExercisesViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers, { metaReducers }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    BrowserAnimationsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
