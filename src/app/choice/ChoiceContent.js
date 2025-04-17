// app/choice/ChoiceContent.js
'use client';

import { useSearchParams } from 'next/navigation';

export default function ChoiceContent() {
  const searchParams = useSearchParams();
  const slug = searchParams.get('slug');

  return <div>Service slug: {slug}</div>;
}
