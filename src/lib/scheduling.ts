const CALENDLY_BOOKING_URL = 'https://calendly.com/alex-eckaholdings/30min';

export function getCalendlyBookingUrl(name: string, email: string): string {
  const url = new URL(CALENDLY_BOOKING_URL);
  url.searchParams.set('name', name);
  url.searchParams.set('email', email);
  return url.toString();
}