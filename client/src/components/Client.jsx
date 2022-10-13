import React from 'react'
import { gql, useQuery } from '@apollo/client';

const GET_CLIENTS = gql`
  query getClients {
    clients {
      id
      name
      email
      phone
    }
  }
`

export default function Client() {
  const { loading, error, data } = useQuery(GET_CLIENTS);

  if (loading) return <p>Loading data...</p>
  if (error) return <p>Oups, sth went wrong</p>
  
  return (
    <>
      {!loading && !error && <h1>Clients</h1>}
    </>
  )
}
