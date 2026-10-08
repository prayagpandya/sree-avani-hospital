/**
 * Utility functions for appointment form processing and WhatsApp formatting.
 */

/**
 * Transforms string into Title Case (capitalizes the first character of each word).
 * e.g. "priya sharma" -> "Priya Sharma"
 */
export function toTitleCase(input: string): string {
  if (!input) return '';
  return input
    .trim()
    .split(/\s+/)
    .map((word) => {
      if (!word) return '';
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(' ');
}

/**
 * Removes any question marks from the string.
 */
export function removeQuestionMarks(input: string): string {
  if (!input) return '';
  return input.replace(/\?/g, '');
}

/**
 * Formats a YYYY-MM-DD date string into a readable titlized format.
 * e.g. "2026-10-15" -> "15 October 2026"
 */
export function formatTitlizedDate(dateString: string): string {
  if (!dateString) return '';
  try {
    const [year, month, day] = dateString.split('-').map(Number);
    if (!year || !month || !day) return toTitleCase(dateString);
    const date = new Date(year, month - 1, day);
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
    return toTitleCase(date.toLocaleDateString('en-IN', options));
  } catch {
    return toTitleCase(dateString);
  }
}

/**
 * Formats time string into a clean titlized format.
 * e.g. "10:30" -> "10:30 AM" or titlized slot
 */
export function formatTitlizedTime(timeString: string): string {
  if (!timeString) return '';
  try {
    const [hoursStr, minutesStr] = timeString.split(':');
    const hours = parseInt(hoursStr, 10);
    const minutes = parseInt(minutesStr, 10);
    if (isNaN(hours) || isNaN(minutes)) return toTitleCase(timeString);
    const period = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12;
    const displayMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    return `${displayHours}:${displayMinutes} ${period}`;
  } catch {
    return toTitleCase(timeString);
  }
}

export interface AppointmentData {
  name: string;
  phone: string;
  email: string;
  date: string;
  time?: string;
  treatment: string;
  message?: string;
}

/**
 * Prepares the WhatsApp message string.
 * Criteria:
 * 1. Contains absolutely NO question marks ('?').
 * 2. All values are titlized (first character capitalized).
 */
export function generateWhatsAppAppointmentMessage(data: AppointmentData): string {
  const titlizedName = toTitleCase(removeQuestionMarks(data.name));
  const phone = removeQuestionMarks(data.phone.trim());
  const email = data.email ? toTitleCase(removeQuestionMarks(data.email.trim())) : 'Not Provided';
  const titlizedDepartment = toTitleCase(removeQuestionMarks(data.treatment));
  const titlizedDate = formatTitlizedDate(data.date);
  const titlizedTime = data.time ? formatTitlizedTime(data.time) : 'Flexible';
  const titlizedMessage = data.message ? toTitleCase(removeQuestionMarks(data.message)) : 'None';

  const lines = [
    "Hello Sree Avani Women's Hospital,",
    'I Would Like To Book An Appointment. Here Are My Details:',
    '',
    `Patient Name: ${titlizedName}`,
    `Phone Number: ${phone}`,
    `Email: ${email}`,
    `Department: ${titlizedDepartment}`,
    `Preferred Date: ${titlizedDate}`,
    `Preferred Time: ${titlizedTime}`,
    `Additional Notes: ${titlizedMessage}`,
    '',
    'Please Confirm The Consultation Slot At Your Convenience.'
  ];

  // Join lines and enforce removal of any stray question marks
  return removeQuestionMarks(lines.join('\n'));
}

/**
 * Builds the direct WhatsApp redirection URL.
 */
export function buildWhatsAppUrl(whatsappNumber: string, data: AppointmentData): string {
  const cleanNumber = whatsappNumber.replace(/\D/g, '');
  const message = generateWhatsAppAppointmentMessage(data);
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}
