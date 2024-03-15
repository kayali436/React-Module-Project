import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

describe('Footer component', () => {
  test('should be displayed at the bottom of the page', () => {
 
    const sampleArray = ['Item 1', 'Item 2', 'Item 3'];

    const { getByTestId } = render(<Footer array={sampleArray} />);

    const footer = getByTestId('footer');

    expect(footer).toBeInTheDocument();

    sampleArray.forEach(item => {
      expect(footer).toHaveTextContent(item);
    });

  });
});

