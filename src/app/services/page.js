"use client";

import ServiceCard from '@/componants/ServiceCard';
import { Heart, Sparkles, Leaf, Hand, Flower2, Smile } from 'lucide-react';

const services = [
  {
    title: 'Massage Therapy',
    description: 'Relax your muscles and mind with a soothing massage tailored to your needs.',
    icon: <Hand size={32} />,
  },
  {
    title: 'Aromatherapy',
    description: 'Essential oils and scents to calm the senses and rejuvenate your spirit.',
    icon: <Flower2 size={32} />,
  },
  {
    title: 'Facial Treatments',
    description: 'Nourish your skin with revitalizing facial therapies.',
    icon: <Smile size={32} />,
  },
  {
    title: 'Hot Stone Massage',
    description: 'Melt away stress with the warmth of volcanic stones.',
    icon: <Leaf size={32} />,
  },
  {
    title: 'Body Scrubs',
    description: 'Exfoliate and refresh your body for glowing, soft skin.',
    icon: <Sparkles size={32} />,
  },
  {
    title: 'Reflexology',
    description: 'Healing pressure point treatment that supports overall well-being.',
    icon: <Heart size={32} />,
  },
];

export default function ServicesPage() {
  return (
    <section className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-emerald-700 mb-4">Our Services</h2>
        <p className="text-gray-600 mb-12">
          Experience relaxation and rejuvenation with our range of holistic therapies and treatments.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
