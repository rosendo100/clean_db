import { Module } from '@nestjs/common';
import { DataServicesModule } from '../frameworks/data-services';
import { GenreFactoryService } from './use-cases/genre-factory.service';
import { GenreUseCases } from './use-cases/genre.use-case';
import { GenreController } from './genre.controller';

@Module({
  imports: [DataServicesModule],
  providers: [GenreFactoryService, GenreUseCases],
  controllers: [GenreController],
  exports: [GenreFactoryService, GenreUseCases],
})
export class GenreUseCasesModule {}
