const FEATURES = [
  "Responsive, mobile-first layout",
  "Theme-ready styling scaffold",
  "Vercel-friendly static build",
];

export default function App() {
  return (
    <main className="app">
      <header className="app__header">
        <p className="app__eyebrow">GENZYNEWS</p>
        <h1 className="app__title">News portal scaffold is live.</h1>
        <p className="app__subtitle">
          The build pipeline is now passing. You can continue wiring the full
          GENZYNEWS experience in <code>src/</code>.
        </p>
      </header>

      <section className="app__card">
        <h2>What&apos;s included</h2>
        <ul>
          {FEATURES.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </section>

      <section className="app__card app__card--accent">
        <h2>Next steps</h2>
        <ol>
          <li>Add pages and components in <code>src/</code>.</li>
          <li>Run <code>npm run dev</code> for local development.</li>
          <li>Deploy the <code>dist/</code> folder to Vercel.</li>
        </ol>
      </section>
    </main>
  );
}
