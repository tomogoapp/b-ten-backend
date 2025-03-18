import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import GraphQLJSON  from 'graphql-type-json/lib/index';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default'
import { FormsModule } from './forms/forms.module';
import { RolesModule } from './roles/roles.module';
import { FormUserModule } from './form-user/form-user.module';
import { FormGuestModule } from './form-guest/form-guest.module';
import { ComponentsModule } from './components/components.module';
import { GuestModule } from './guest/guest.module';
import { FormComponentModule } from './form-component/form-component.module';

import * as crypto from 'crypto';
(global as any).crypto = crypto;

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRoot({
      type:'postgres',
      host: process.env.POSTGRES_DB_HOST,
      port: parseInt(process.env.POSTGRES_DB_PORT || '5432'),
      username: process.env.POSTGRES_DB_USERNAME,
      password: process.env.POSTGRES_DB_PASSWORD,
      database: process.env.POSTGRES_DB_DATABASE,
      entities:[join(__dirname,'**','*.entity.{ts,js}')],
      synchronize: true
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      imports: [ConfigModule],
      driver: ApolloDriver,
      useFactory: async () => ({
        typePaths: ['./**/*.gql'],  // ✅ Asegura que cargue archivos `.gql`
        playground: false,
        uploads: false,
        cors: false,
        plugins: [ApolloServerPluginLandingPageLocalDefault({ footer: false })],
        csrfPrevention: false, // Deshabilita la protección CSRF
        autoSchemaFile:join(process.cwd(),'src/schema.gql'),
        context: ({ req, res }) => ({ req, res }),
        //resolvers: { JSON: GraphQLJSON },
      }),
    }),
    AuthModule,
    FormsModule,
    RolesModule,
    FormUserModule,
    FormGuestModule,
    ComponentsModule,
    GuestModule,
    FormComponentModule,
  ],
})

export class AppModule {}
