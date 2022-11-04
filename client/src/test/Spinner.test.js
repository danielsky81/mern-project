import { render, screen } from '@testing-library/react';
import Spinner from '../components/Spinner';

describe('Spinner component', () => {
  test('renders spinner loader', () => {
    render(<Spinner />);
    const spinner = screen.getByRole('status');
    expect(spinner).toBeInTheDocument();
  })
})