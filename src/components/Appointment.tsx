import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2Icon, MessageCircleIcon, SendIcon } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { Reveal } from './ui/Reveal';
import { Button } from './ui/Buttons';
import { activeTreatments } from '../data/treatments';
import { hospital } from '../data/hospital';
import {
  AppointmentData,
  buildWhatsAppUrl,
  toTitleCase
} from '../utils/appointment';

interface FormState {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  treatment: string;
  message: string;
}

const empty: FormState = {
  name: '',
  phone: '',
  email: '',
  date: '',
  time: '',
  treatment: '',
  message: ''
};

type Errors = Partial<Record<keyof FormState, string>>;

// Regex patterns
const NAME_REGEX = /^[a-zA-Z\s]{2,50}$/;
const PHONE_REGEX = /^\d{10}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function validate(values: FormState): Errors {
  const errors: Errors = {};
  const today = new Date().toISOString().split('T')[0];

  // Full Name validation
  if (!values.name.trim()) {
    errors.name = 'Please enter your full name.';
  } else if (!NAME_REGEX.test(values.name.trim())) {
    errors.name = 'Please enter a valid name (letters and spaces only, at least 2 characters).';
  }

  // Phone number (10 characters, digits only)
  if (!values.phone.trim()) {
    errors.phone = 'Please enter your 10-digit mobile number.';
  } else if (!PHONE_REGEX.test(values.phone.trim())) {
    errors.phone = 'Phone number must be exactly 10 digits.';
  }

  // Email validation
  if (!values.email.trim()) {
    errors.email = 'Please enter your email address.';
  } else if (!EMAIL_REGEX.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address (e.g. name@example.com).';
  }

  // Department / Treatment selection
  if (!values.treatment) {
    errors.treatment = 'Please select a department.';
  }

  // Preferred Date validation
  if (!values.date) {
    errors.date = 'Please choose a preferred consultation date.';
  } else if (values.date < today) {
    errors.date = 'Please choose today or an upcoming date.';
  }

  return errors;
}

const fieldClass =
  'mt-2 w-full rounded-xl border border-plum-900/12 bg-white px-4 py-3 text-[0.9rem] text-plum-900 outline-none transition-colors duration-200 ease-premium placeholder:text-plum-900/35 focus:border-plum-600';

interface AppointmentProps {
  id?: string;
  title?: string;
  intro?: string;
  showHeading?: boolean;
}

export function Appointment({
  id = 'appointment',
  title = 'Request an appointment',
  intro = 'Share your details and WhatsApp will open directly with your formatted appointment request to send to the hospital.',
  showHeading = true
}: AppointmentProps) {
  const [values, setValues] = useState<FormState>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState<string>('');

  const today = new Date().toISOString().split('T')[0];

  const update = (key: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 10 characters only in digits
    const digitsOnly = e.target.value.replace(/\D/g, '').slice(0, 10);
    setValues((v) => ({ ...v, phone: digitsOnly }));
    setErrors((prev) => ({ ...prev, phone: undefined }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    const data: AppointmentData = {
      name: values.name,
      phone: values.phone,
      email: values.email,
      date: values.date,
      time: values.time,
      treatment: values.treatment,
      message: values.message
    };

    // Prepare URL with titlized values and no question marks
    const targetUrl = buildWhatsAppUrl(hospital.contact.whatsappNumber, data);
    setWhatsappUrl(targetUrl);
    setSubmitted(true);

    // Open WhatsApp directly so user only has to press send
    try {
      const opened = window.open(targetUrl, '_blank');
      if (!opened) {
        window.location.href = targetUrl;
      }
    } catch {
      window.location.href = targetUrl;
    }
  };

  return (
    <section id={id} className="scroll-mt-28 bg-ivory">
      <div className="mx-auto max-w-[1280px] px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            {showHeading && (
              <SectionHeading
                label="APPOINTMENTS"
                title={title}
                intro={intro}
              />
            )}

            <Reveal index={3}>
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3 rounded-xl border border-gold-600/20 bg-white p-4 shadow-soft">
                  <MessageCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" aria-hidden="true" />
                  <p className="text-[0.82rem] leading-relaxed text-plum-900/75">
                    Submitting opens WhatsApp with your pre-filled, formatted consultation request ready to send to our official hospital desk.
                  </p>
                </div>
                <p className="text-[0.82rem] leading-[1.75] text-plum-900/55">
                  {hospital.timings.note}
                </p>
                <p className="border-l-2 border-gold-600 pl-4 text-[0.78rem] leading-[1.7] text-plum-900/55">
                  {hospital.disclaimer}
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                role="status"
                className="flex flex-col items-start rounded-2xl bg-white p-8 shadow-soft sm:p-10"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                  <CheckCircle2Icon className="h-8 w-8 text-gold-600" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-display text-[1.75rem] leading-tight text-plum-800">
                  Opening WhatsApp with your request
                </h3>
                <p className="mt-3 text-[0.9rem] leading-[1.75] text-plum-900/70">
                  Your appointment details have been prepared. Simply hit <strong className="font-semibold text-plum-900">Send</strong> in WhatsApp to submit your request directly to the hospital team.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-gold-600 px-6 py-3 text-sm font-semibold text-plum-900 shadow-soft transition-all duration-200 hover:bg-gold-400"
                  >
                    <MessageCircleIcon className="h-4 w-4" aria-hidden="true" />
                    Open WhatsApp Now
                  </a>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setValues(empty);
                      setSubmitted(false);
                    }}
                  >
                    Book Another Slot
                  </Button>
                </div>
              </motion.div>
            ) : (
              <Reveal>
                <form
                  onSubmit={onSubmit}
                  noValidate
                  className="rounded-2xl bg-white p-6 shadow-soft sm:p-9"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field
                      id="name"
                      label="Full Name"
                      required
                      error={errors.name}
                      value={values.name}
                      onChange={update('name')}
                      placeholder="e.g. Priya Sharma"
                    />

                    <Field
                      id="phone"
                      label="Phone Number (10 digits)"
                      type="tel"
                      inputMode="numeric"
                      required
                      maxLength={10}
                      error={errors.phone}
                      value={values.phone}
                      onChange={handlePhoneChange}
                      placeholder="e.g. 9876543210"
                    />

                    <Field
                      id="email"
                      label="Email Address"
                      type="email"
                      required
                      error={errors.email}
                      value={values.email}
                      onChange={update('email')}
                      placeholder="e.g. priya@example.com"
                    />

                    <div>
                      <label
                        htmlFor="treatment"
                        className="text-[0.78rem] font-medium tracking-wide text-plum-900/70"
                      >
                        Department / Treatment <span className="text-gold-700">*</span>
                      </label>
                      <select
                        id="treatment"
                        value={values.treatment}
                        onChange={update('treatment')}
                        aria-invalid={Boolean(errors.treatment)}
                        className={fieldClass}
                      >
                        <option value="">Select a department</option>
                        {activeTreatments().map((t) => (
                          <option key={t.slug} value={t.title}>
                            {t.title}
                          </option>
                        ))}
                        <option value="General Enquiry">General Enquiry</option>
                      </select>
                      {errors.treatment && <ErrorText>{errors.treatment}</ErrorText>}
                    </div>

                    <Field
                      id="date"
                      label="Preferred Date"
                      type="date"
                      min={today}
                      required
                      error={errors.date}
                      value={values.date}
                      onChange={update('date')}
                    />

                    <Field
                      id="time"
                      label="Preferred Time (Optional)"
                      type="time"
                      value={values.time}
                      onChange={update('time')}
                    />
                  </div>

                  <div className="mt-5">
                    <label
                      htmlFor="message"
                      className="text-[0.78rem] font-medium tracking-wide text-plum-900/70"
                    >
                      Message / Concern (Optional)
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={values.message}
                      onChange={update('message')}
                      placeholder="Briefly describe your symptoms or reason for visit"
                      className={`${fieldClass} resize-none`}
                    />
                  </div>

                  <div className="mt-7 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                    <Button type="submit" variant="gold" className="w-full sm:w-auto sm:px-8">
                      <SendIcon className="h-4 w-4" aria-hidden="true" />
                      Send via WhatsApp
                    </Button>
                    <span className="text-[0.78rem] text-plum-900/55">
                      Direct WhatsApp message will open ready to send
                    </span>
                  </div>
                </form>
              </Reveal>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function ErrorText({ children }: { children: React.ReactNode }) {
  return <p className="mt-1.5 text-[0.74rem] font-medium text-rose-600">{children}</p>;
}

interface FieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
}

function Field({ id, label, error, required, type = 'text', ...rest }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="text-[0.78rem] font-medium tracking-wide text-plum-900/70">
        {label} {required && <span className="text-gold-700">*</span>}
      </label>
      <input
        id={id}
        type={type}
        aria-invalid={Boolean(error)}
        className={`${fieldClass} ${error ? 'border-rose-400 focus:border-rose-600' : ''}`}
        {...rest}
      />
      {error && <ErrorText>{error}</ErrorText>}
    </div>
  );
}