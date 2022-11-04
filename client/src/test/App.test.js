import { render, screen } from '@testing-library/react';
import App from '../App';

// const cache = new InMemoryCache({
//   typePolicies: {
//     Query: {
//       fields: {
//         clients: {
//           merge(existing, incoming) {
//             return incoming;
//           }
//         },
//         projects: {
//           merge(existing, incoming) {
//             return incoming;
//           }
//         }
//       }
//     }
//   }
// })

// const client = new ApolloClient({
//   uri: 'http://localhost:8000/graphql',
//   cache
// })

describe('App component', () => {
  test('renders', () => {
    render(<App />);
  })
});

// describe('App component', () => {
//   it('renders Header component', () => {
//     renderer(<Header />)
//   })
// });
