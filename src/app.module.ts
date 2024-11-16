import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioController } from './usuario/usuario.controller';
import { UsuarioModule } from './usuario/usuario.module';
import { RepositoryModule } from './repository/repository.module';

@Module({
  imports: [UsuarioModule, RepositoryModule],
  controllers: [AppController, UsuarioController],
  providers: [AppService],
})
export class AppModule {}
