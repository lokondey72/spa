// app/choice/page.js
import { Suspense } from "react";
import ChoiceForm from "@/src/components/ChoiceForm";

export const dynamic = "force-dynamic";

export default function ChoicePage() {
  return (
    <main className="max-w-6xl mx-auto min-h-screen pt-20 px-4 sm:px-6 lg:px-20">
      <h1 className="text-3xl font-bold mt-8 text-emerald-700">
        Select a Service
      </h1>
      <Suspense fallback={<div className="p-8 text-lg">Loading...</div>}>
        <ChoiceForm />
      </Suspense>
    </main>
  );
}
