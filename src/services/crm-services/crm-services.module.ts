import { Module } from '@nestjs/common';
import { SalesforceServicesModule } from '../../book/services/salesforce/salesforce-service.module';

@Module({
  imports: [SalesforceServicesModule],
  exports: [SalesforceServicesModule],
})
export class CrmServicesModule {}
