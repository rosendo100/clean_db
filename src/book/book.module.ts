import { Module } from '@nestjs/common';
import { DataServicesModule } from '../frameworks/data-services';
import { CrmServicesModule } from '../services/crm-services/crm-services.module';
import { BookFactoryService } from './use-cases/book-factory.service';
import { BookUseCases } from './use-cases/book.use-case';
import { BookController } from './book.controller';

@Module({
  imports: [DataServicesModule, CrmServicesModule],
  controllers: [BookController],
  providers: [BookFactoryService, BookUseCases],
  exports: [BookFactoryService, BookUseCases],
})
export class BookUseCasesModule {}
