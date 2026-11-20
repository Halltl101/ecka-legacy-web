import { describe, expect, test } from 'bun:test';
import { getCalendlyBookingUrl } from './scheduling';

describe('intro call scheduling', () => {
  test('uses the supplied 30-minute Calendly booking link', () => {
    const url = new URL(getCalendlyBookingUrl('Test Visitor', 'visitor@example.com'));
    expect(`${url.origin}${url.pathname}`).toBe('https://calendly.com/alex-eckaholdings/30min');
  });

  test('passes the completed form contact information to Calendly', () => {
    const url = new URL(getCalendlyBookingUrl('Test & Visitor', 'visitor+call@example.com'));
    expect(url.searchParams.get('name')).toBe('Test & Visitor');
    expect(url.searchParams.get('email')).toBe('visitor+call@example.com');
  });
});