import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    GraphQLModule.forRoot({
      auteSchemaFile: true,
      driver: ApolloDriver,
    }),
  ],
})
export class AppModule {}
