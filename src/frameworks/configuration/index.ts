import 'dotenv/config'
import { ConfigModule, ConfigService } from '@nestjs/config';

export const DATA_BASE_CONFIGURATION = {
  mongoConnectionString: process.env
    .CLEAN_NEST_MONGO_CONNECTION_STRING as string,
};
