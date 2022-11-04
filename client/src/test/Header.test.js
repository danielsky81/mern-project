import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

describe('Header component', () => {
  test('renders navbar to the page', () => {
    render(<Header />);
    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();
  })
  test('renders project mern app as a text', () => {
    render(<Header />);
    const text = screen.getByText(/project mern app/i);
    expect(text).toBeInTheDocument();
  });
  test('renders project logo', () => {
    render(<Header />);
    const logo = screen.getByAltText('logo');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src');
  })
})
