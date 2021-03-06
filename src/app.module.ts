import { Module } from '@nestjs/common';
import { APP_GUARD, RouterModule } from '@nestjs/core';
import { AppController } from './app.controller';
import { routes } from './app.routes';
import { AppService } from './app.service';
import { AuthGuard } from './auth.gaurd';
import { AuthModule } from './modules/authModule/auth.module';
import { CardModule } from './modules/cardModule/card.module';
import { FileUploadModule } from './modules/fileUpload/fileUpload.module';
import { SharedModule } from './modules/shared/shared.module';

@Module({
  imports: [
    SharedModule,
    FileUploadModule,
    AuthModule,
    CardModule,
    RouterModule.register(routes),
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    AppService,
  ],
})
export class AppModule {}