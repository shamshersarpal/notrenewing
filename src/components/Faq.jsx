import { useState } from "react";

const faqs = [
  {
    id: 'faq-1',
    question: 'What is NotRenewing.com?',
    answer: 'NotRenewing.com is a marketplace where users can buy and sell domains that are about to expire but are not being renewed by their current owners.',
  },
  {
    id: 'faq-2',
    question: 'How do I list a domain for sale?',
    answer: 'Simply create an account, verify your ownership of the domain, and set your price to list it on our platform.',
  },
  {
    id: 'faq-3',
    question: 'How is a domain verified?',
    answer: 'We verify domain ownership using DNS records or email verification to ensure that the domain belongs to you.',
  },
  {
    id: 'faq-4',
    question: 'What happens after I purchase a domain?',
    answer: 'Once purchased, our team will guide both parties through a secure and smooth transfer process.',
  },
  {
    id: 'faq-5',
    question: 'Is there a fee for using the platform?',
    answer: 'Listing is free. We charge a small service fee on successful transactions to support the platform.',
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="w-full max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={faq.id} className="border-b border-[#e2e8f0] ">
            <h3>
              <button
                type="button"
                id={`${faq.id}-button`}
                aria-controls={`${faq.id}-panel`}
                aria-expanded={openIndex === index}
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between py-4 text-lg font-medium transition-all hover:underline cursor-pointer"
              >
                {faq.question}
                <svg
                  className={`h-4 w-4 shrink-0 transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
            </h3>
            {openIndex === index && (
              <div
                id={`${faq.id}-panel`}
                role="region"
                aria-labelledby={`${faq.id}-button`}
                className="pb-4 text-sm text-gray-700"
              >
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
