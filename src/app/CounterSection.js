import Counter from "../components/Counter";

export default function CounterSection() {
  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-emerald-700 mb-8">
          Quick Stats
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          <Counter target={5} label="Years Experience" />
          <Counter target={1000} label="Happy Clients" />
          <Counter target={1200} label="Bookings Completed" />
          <Counter target={11} label="Treatments Offered" />
        </div>
      </div>
    </section>
  );
}
