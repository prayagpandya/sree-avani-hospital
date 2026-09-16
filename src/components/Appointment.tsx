import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2Icon } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { Reveal } from './ui/Reveal';
import { Button } from './ui/Buttons';
import { activeTreatments } from '../data/treatments';
import { hospital } from '../data/hospital';

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

function validate(values: FormState): Errors {
  const errors: Errors = {};
  if (values.name.trim().length < 2) errors.name = 'Please enter your full name.';
  if (!/^[0-9+\-\s()]{8,16}$/.test(values.phone.trim()))
  errors.phone = 'Please enter a valid phone number.';
  if (values.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
  errors.email = 'Please enter a valid email address.';
  if (!values.date) errors.date = 'Please choose a preferred date.';
  if (!values.treatment) errors.treatment = 'Please select a department.';
  return errors;
}

const fieldClass =
'mt-2 w-full rounded-xl border border-plum-900/12 bg-white px-4 py-3 text-[0.9rem] text-plum-900 outline-none transition-colors duration-200 ease-premium placeholder:text-plum-900/35 focus:border-plum-600';

export function Appointment() {
  const [values, setValues] = useState<FormState>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const update = (key: keyof FormState) => (
  e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
  {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;
    /**
     * API-ready: replace this block with a POST to the hospital's endpoint.
     * e.g. await fetch('/api/appointments', { method: 'POST', body: JSON.stringify(values) })
     */
    setSubmitted(true);
  };

  return (
    <section id="appointment" className="scroll-mt-28 bg-ivory">
      <div className="mx-auto max-w-[1280px] px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              label="APPOINTMENTS"
              title="Request an appointment"
              intro="Share your details and the hospital will call you back to confirm a consultation slot. Submitting this form is a request, not a confirmed appointment." />
            
            <Reveal index={3}>
              <p className="mt-8 text-[0.82rem] leading-[1.75] text-plum-900/55">
                {hospital.timings.note}
              </p>
              <p className="mt-4 border-l-2 border-gold-600 pl-4 text-[0.78rem] leading-[1.7] text-plum-900/55">
                {hospital.disclaimer}
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            {submitted ?
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
              role="status"
              className="flex flex-col items-start rounded-2xl bg-white p-9 shadow-soft">
              
                <CheckCircle2Icon className="h-9 w-9 text-gold-600" aria-hidden="true" />
                <h3 className="mt-5 font-display text-[1.75rem] leading-tight text-plum-800">
                  Thank you. Your appointment request has been received.
                </h3>
                <p className="mt-3 text-[0.9rem] leading-[1.75] text-plum-900/65">
                  The hospital will contact you on the number you provided to confirm
                  your consultation. Your appointment is confirmed only after that call.
                </p>
                <Button
                variant="outline"
                className="mt-7"
                onClick={() => {
                  setValues(empty);
                  setSubmitted(false);
                }}>
                
                  Submit another request
                </Button>
              </motion.div> :

            <Reveal>
                <form
                onSubmit={onSubmit}
                noValidate
                className="rounded-2xl bg-white p-6 shadow-soft sm:p-9">
                
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field
                    id="name"
                    label="Full name"
                    required
                    error={errors.name}
                    value={values.name}
                    onChange={update('name')}
                    placeholder="Your name" />
                  
                    <Field
                    id="phone"
                    label="Phone number"
                    type="tel"
                    required
                    error={errors.phone}
                    value={values.phone}
                    onChange={update('phone')}
                    placeholder="10-digit mobile number" />
                  
                    <Field
                    id="email"
                    label="Email (optional)"
                    type="email"
                    error={errors.email}
                    value={values.email}
                    onChange={update('email')}
                    placeholder="you@example.com" />
                  
                    <div>
                      <label
                      htmlFor="treatment"
                      className="text-[0.78rem] font-medium tracking-wide text-plum-900/70">
                      
                        Treatment / department <span className="text-gold-700">*</span>
                      </label>
                      <select
                      id="treatment"
                      value={values.treatment}
                      onChange={update('treatment')}
                      aria-invalid={Boolean(errors.treatment)}
                      className={fieldClass}>
                      
                        <option value="">Select a department</option>
                        {activeTreatments().map((t) =>
                      <option key={t.slug} value={t.title}>
                            {t.title}
                          </option>
                      )}
                        <option value="General enquiry">General enquiry</option>
                      </select>
                      {errors.treatment && <ErrorText>{errors.treatment}</ErrorText>}
                    </div>
                    <Field
                    id="date"
                    label="Preferred date"
                    type="date"
                    required
                    error={errors.date}
                    value={values.date}
                    onChange={update('date')} />
                  
                    <Field
                    id="time"
                    label="Preferred time (optional)"
                    type="time"
                    value={values.time}
                    onChange={update('time')} />
                  
                  </div>

                  <div className="mt-5">
                    <label
                    htmlFor="message"
                    className="text-[0.78rem] font-medium tracking-wide text-plum-900/70">
                    
                      Message (optional)
                    </label>
                    <textarea
                    id="message"
                    rows={4}
                    value={values.message}
                    onChange={update('message')}
                    placeholder="Briefly describe your concern or any previous treatment"
                    className={`${fieldClass} resize-none`} />
                  
                  </div>

                  <Button type="submit" variant="gold" className="mt-7 w-full sm:w-auto sm:px-8">
                    Request Appointment
                  </Button>
                </form>
              </Reveal>
            }
          </div>
        </div>
      </div>
    </section>);

}

function ErrorText({ children }: {children: React.ReactNode;}) {
  return <p className="mt-1.5 text-[0.74rem] text-plum-600">{children}</p>;
}

function Field({
  id,
  label,
  error,
  required,
  type = 'text',
  ...rest






}: {id: string;label: string;error?: string;required?: boolean;type?: string;} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label htmlFor={id} className="text-[0.78rem] font-medium tracking-wide text-plum-900/70">
        {label} {required && <span className="text-gold-700">*</span>}
      </label>
      <input
        id={id}
        type={type}
        aria-invalid={Boolean(error)}
        className={fieldClass}
        {...rest} />
      
      {error && <ErrorText>{error}</ErrorText>}
    </div>);

}