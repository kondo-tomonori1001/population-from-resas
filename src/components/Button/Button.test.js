import { render, screen } from '@testing-library/react';
import { Button } from './Button.jsx';

describe('<Button />', () => {
  test('render Button component', () => {
    render(<Button text="button" />);
    const button = screen.getByText('button');
    expect(button).toBeInTheDocument();
  });
});
