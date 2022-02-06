import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {APOLLO_OPTIONS} from 'apollo-angular';
import {ApolloClientOptions, InMemoryCache} from '@apollo/client/core';
import {HttpLink} from 'apollo-angular/http';
import {environment} from "../environments/environment";

let uri = 'http://localhost:1337/graphql'; // local
// const uri = 'https://microwave-db.herokuapp.com/graphql';

if(environment.production){
  uri = 'https://microwave-db.herokuapp.com/graphql'; // production
}

export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  return {
    link: httpLink.create({uri}),
    cache: new InMemoryCache(),
  };
}

@NgModule({

  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
