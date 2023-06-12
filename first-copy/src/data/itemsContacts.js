export const items = [
  {
    id: 1,
    name: 'Acme Corporation',
    telephone: '+1 (555) 123-4567',
    description: 'Leading provider of explosive products and services.',
  },
  {
    id: 2,
    name: 'Globex Corporation',
    telephone: '+1 (555) 234-5678',
    description:
      'Innovative company specializing in advanced technology solutions.',
  },
  {
    id: 3,
    name: 'Umbrella Corporation',
    telephone: '+1 (555) 345-6789',
    description:
      'Multinational conglomerate with interests in pharmaceuticals and biotechnology.',
  },
  {
    id: 4,
    name: 'Wayne Enterprises',
    telephone: '+1 (555) 456-7890',
    description:
      'Diversified company with holdings in finance, technology, and defense.',
  },
  {
    id: 5,
    name: 'Stark Industries',
    telephone: '+1 (555) 567-8901',
    description:
      'Innovative company specializing in advanced weapons and robotics.',
  },
];

export function getContact(id) {
  // eslint-disable-next-line
  return items.find((item) => item.id == id);
}
