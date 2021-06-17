import { TypeOrmModuleOptions, TypeOrmModule } from '@nestjs/typeorm';
import { DynamicModule } from '@nestjs/common';
import * as entities from '@entities';
import * as migrations from '@migrations';

export async function getTypeOrmConfig(): Promise<TypeOrmModuleOptions> {
  console.log(Object.values(migrations))
  return {
  type: 'postgres',
  host: process.env.TYPEORM_HOST,
  port: parseInt(process.env.TYPEORM_PORT, 10),
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  migrationsRun: true,
  synchronize: false,
  entities: Object.values(entities),
  migrationsTableName: 'MIGRATIONS',
  migrations:Object.values(migrations),
  cli: { 
    entitiesDir: 'src/entities',
    migrationsDir: 'src/migrations',
  },
  };      
}

export async function DatabaseModule(): Promise<DynamicModule> {
 return TypeOrmModule.forRoot(await getTypeOrmConfig());
}
