import { render, screen } from '@testing-library/react';
import App from './NavBar';

test('renders learn react link', () => {
  render(<NavBar />);
  const linkElement = screen.getByText(/About us/i);
  expect(linkElement).toBeInTheDocument();
});
