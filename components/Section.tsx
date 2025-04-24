export default function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
    return (
      <section id={id} className="max-w-3xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        {children}
      </section>
    );
  }
  