import React, { useState, useCallback } from 'react';
import { toast } from 'react-hot-toast';
import HeroSection from '../components/common/HeroSection';
import { FaPaperPlane } from 'react-icons/fa';

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { id, value } = e.target;
      setFormState((prev) => ({ ...prev, [id]: value }));
      if (errors[id as keyof FormErrors]) {
        setErrors((prev) => ({ ...prev, [id]: undefined }));
      }
    },
    [errors]
  );

  const validateForm = useCallback(() => {
    const newErrors: FormErrors = {};
    if (!formState.name.trim()) newErrors.name = 'Please enter your name.';
    if (!formState.email.trim()) {
      newErrors.email = 'Please enter your email.';
    } else if (!/^\S+@\S+\.\S+$/.test(formState.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formState.message.trim())
      newErrors.message = 'Please enter your message.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formState]);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (!validateForm()) {
        toast.error('Please fill out the form correctly.');
        return;
      }

      setIsSubmitting(true);

      const whatsappMessage = `Hi! I'm ${formState.name}.\n\nMessage: ${formState.message}\n\nMy email is ${formState.email}`;
      const encodedMessage = encodeURIComponent(whatsappMessage);
      const phoneNumber = import.meta.env.VITE_CONTACT_PHONE;

      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

      window.open(whatsappUrl, '_blank');

      setTimeout(() => {
        setIsSubmitting(false);
        toast.success('Redirecting to WhatsApp!');
        setFormState({ name: '', email: '', message: '' });
      }, 1000);
    },
    [formState, validateForm]
  );

  const InputField: React.FC<{
    id: keyof FormState;
    label: string;
    placeholder: string;
    type?: string;
    isTextArea?: boolean;
  }> = ({ id, label, placeholder, type = 'text', isTextArea = false }) => (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      {isTextArea ? (
        <textarea
          id={id}
          value={formState[id]}
          onChange={handleInputChange}
          rows={4}
          className={`w-full px-4 py-2 border rounded-md shadow-sm transition ${errors[id] ? 'border-red-500 ring-red-500' : 'border-gray-300 focus:border-pink-500 focus:ring-pink-500'}`}
          placeholder={placeholder}
        />
      ) : (
        <input
          type={type}
          id={id}
          value={formState[id]}
          onChange={handleInputChange}
          className={`w-full px-4 py-2 border rounded-md shadow-sm transition ${errors[id] ? 'border-red-500 ring-red-500' : 'border-gray-300 focus:border-pink-500 focus:ring-pink-500'}`}
          placeholder={placeholder}
        />
      )}
      {errors[id] && <p className="text-red-500 text-xs mt-1">{errors[id]}</p>}
    </div>
  );

  return (
    <section className="py-16">
      <div className="container mx-auto px-6 max-w-2xl">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">
            Get in Touch
          </h2>
          <p className="text-center text-gray-600 mb-8">
            We'd love to hear from you. Send us a message!
          </p>
          <form className="space-y-6" onSubmit={handleSubmit} noValidate>
            <InputField id="name" label="Name" placeholder="Your Name" />
            <InputField
              id="email"
              label="Email"
              placeholder="your.email@example.com"
              type="email"
            />
            <InputField
              id="message"
              label="Message"
              placeholder="How can we help you?"
              isTextArea
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex justify-center items-center gap-2 bg-pink-500 text-white px-6 py-3 rounded-md hover:bg-pink-600 transition duration-300 disabled:bg-pink-300"
            >
              {isSubmitting ? 'Sending...' : 'Send via WhatsApp'}
              {!isSubmitting && <FaPaperPlane />}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const ContactPage: React.FC = () => (
  <>
    <HeroSection
      title="Contact Us"
      subtitle="We are here to help and answer any question you might have."
      backgroundImage="https://source.unsplash.com/random/1600x900/?contact,support"
    />
    <ContactForm />
  </>
);

export default ContactPage;
