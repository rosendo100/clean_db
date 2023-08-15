import { Module } from '@nestjs/common';
import { MongoDataServicesModule } from '../../frameworks/data-services/mongo/mongo-data-services.module';
import { TypeORMDataServicesModule } from '../../frameworks/data-services/typeORM/typeorm-data-services.module';
import { SequelizeDataServicesModule } from './sequelize/squelize-data-services.module';
// Importa otros módulos de servicios de datos según sea necesario

const selectedDataServiceModules = [
  process.env.USE_MONGOOSE === 'true' ? MongoDataServicesModule : null,
  process.env.USE_TYPEORM === 'true' ? TypeORMDataServicesModule : null,
  process.env.USE_SEQUELIZE === 'true' ? SequelizeDataServicesModule : null,

  // Agrega otros módulos de servicios de datos según sea necesario
].filter((module) => module !== null);

@Module({
  imports: selectedDataServiceModules,
  exports: selectedDataServiceModules,
})
export class DataServicesModule {}