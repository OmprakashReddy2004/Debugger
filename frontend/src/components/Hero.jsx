export default function Hero() {
  return (
    <section className="hero">
      <h1>
        AI that <span>reads</span> your GitHub repo  
        <br />and <span>fixes</span> your code
      </h1>

      <p>
        Paste a GitHub repository.  
        Get file-wise issues, fixes, and diffs.  
        Runs locally using Ollama — no API limits.
      </p>

      <div className="hero-actions">
        <button className="primary">Analyze Repository</button>
        <button className="secondary">View Demo</button>
      </div>
    </section>
  );
}
