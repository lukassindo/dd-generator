import { render, screen } from '@testing-library/react';
import App from './App';
import serviceRoll from './services/roll';

describe('renders <App/>', ()=> {
  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/Your Character Generator/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('has next', () => {
    render(<App />);
    const linkElement = screen.getByText(/next/i);
    expect(linkElement).toBeInTheDocument();
  });

})


describe('service Roll.js', ()=> {
  test('if every result is >= 3', () => {
    const results = serviceRoll.roll();
      expect(results[0]).toBeGreaterThanOrEqual(3);
      expect(results[1]).toBeGreaterThanOrEqual(3);
      expect(results[2]).toBeGreaterThanOrEqual(3);
      expect(results[3]).toBeGreaterThanOrEqual(3);
      expect(results[4]).toBeGreaterThanOrEqual(3);
      expect(results[5]).toBeGreaterThanOrEqual(3);
  });

  test('results array has 6 elements', () => {
    const results = serviceRoll.roll();
    expect(results.length).toBe(6);
  });
});

/*Dodać testy*/
