import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

const client = new ApolloClient({
  uri: "https://petgram-server-surimi-surimidiaz.vercel.app/graphql",
  cache: new InMemoryCache(),
});
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
