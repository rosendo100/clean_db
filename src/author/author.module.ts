import { Module } from '@nestjs/common';
import { DataServicesModule } from '../frameworks/data-services';
import { AuthorFactoryService } from './use-cases/author-factory.service';
import { AuthorUseCases } from './use-cases/author.use-case';
import { AuthorController } from './author.controller';

@Module({
  imports: [DataServicesModule],
  providers: [AuthorFactoryService, AuthorUseCases],
  controllers: [AuthorController],
  exports: [AuthorFactoryService, AuthorUseCases],
})
export class AuthorUseCasesModule {}
