<h1 align="center">Dynamic Course Landing (Angular)</h1>

<p align="center">
  Reusable Angular landing page platform driven by JSON data.
</p>

<hr>

<h2>Overview</h2>

<p>
  This project is a dynamic course landing platform built with <strong>Angular</strong>.
  Instead of creating a different landing page for each course, the application uses a
  <strong>JSON-driven structure</strong> to render content dynamically through reusable sections and components.
</p>

<p>
  The main idea is simple: <strong>change the data, not the structure</strong>.
  This makes the project flexible, scalable, and easy to adapt for different course offerings.
</p>

<hr>

<h2>Key Features</h2>

<ul>
  <li>Dynamic content rendering from a single JSON source</li>
  <li>Reusable and modular section-based architecture</li>
  <li>Standalone Angular components</li>
  <li>Signals for reactive state management</li>
  <li>Clean separation between data and UI</li>
</ul>

<hr>

<h2>Architecture</h2>

<p>
  The application follows a simple and scalable structure:
</p>

<ul>
  <li><strong>Data Layer:</strong> JSON catalog + service (CourseCatalogService)</li>
  <li><strong>UI Layer:</strong> Section-based components (Hero, Teachers, Tech, Pricing, Formats)</li>
  <li><strong>State Management:</strong> Angular signals</li>
</ul>

<p>
  Each section is independent and receives only the data it needs.
</p>

<hr>

<h2>Tech Stack</h2>

<ul>
  <li>Angular (standalone components, signals)</li>
  <li>TypeScript</li>
  <li>HTML / CSS</li>
  <li>Bootstrap</li>
</ul>

<hr>

<h2>How It Works</h2>

<ol>
  <li>The application loads a course configuration from a JSON file</li>
  <li>The catalog service exposes the data using signals</li>
  <li>The Home component distributes the data to each section</li>
  <li>Each section renders dynamically based on the provided data</li>
</ol>

<hr>

<h2>Use Case</h2>

<p>
  This project is designed for scenarios where multiple course landing pages are needed,
  but maintaining separate codebases would be inefficient.
</p>

<p>
  With this approach, new courses can be launched by simply updating the JSON structure,
  without modifying the core application.
</p>

<hr>

<h2>Project Status</h2>

<p>
  Initial version completed. Currently focused on UI improvements and visual refinement
  for portfolio presentation.
</p>
