<h1 align="center">Angular Course Engine</h1>

<p align="center">
  JSON-driven, reusable course landing platform built with Angular.
</p>

<hr/>

<h2>📌 Overview</h2>

<p>
<strong>Angular Course Engine</strong> is a dynamic landing platform designed to render complete course pages from structured JSON data.
</p>

<p>
Instead of hardcoding UI content, the application loads different course configurations and builds the entire interface dynamically. This approach enables scalability, reuse, and fast content switching without modifying components.
</p>

<hr/>

<h2>🚀 Key Features</h2>

<ul>
  <li>⚙️ JSON-driven architecture (dynamic UI rendering)</li>
  <li>🔁 Reusable components (Hero, Teachers, Pricing, etc.)</li>
  <li>📦 Standalone Angular components</li>
  <li>📡 Data loading via HttpClient + Signals</li>
  <li>🎯 Multiple course presets (frontend, backend, fullstack)</li>
  <li>🎨 Consistent dark theme using CSS variables</li>
  <li>📱 Responsive layout (Bootstrap-based)</li>
</ul>

<hr/>

<h2>🧠 Architecture</h2>

<ul>
  <li><strong>Presentation Layer:</strong> Modular standalone components</li>
  <li><strong>Data Layer:</strong> JSON files in <code>/assets</code></li>
  <li><strong>State Management:</strong> Angular Signals</li>
  <li><strong>Service Layer:</strong> <code>CourseCatalogService</code> handles data loading</li>
</ul>

<p>
The application separates structure (components) from content (JSON), enabling a fully configurable UI.
</p>

<hr/>

<h2>📂 Project Structure</h2>

<pre>
src/
 ├── app/
 │   ├── components/
 │   ├── pages/
 │   ├── services/
 │   └── models/
 ├── assets/
 │   ├── course-frontend-angular.json
 │   ├── course-backend-symfony-api.json
 │   └── course-fullstack-angular-symfony.json
</pre>

<hr/>

<h2>⚙️ How It Works</h2>

<ol>
  <li>Select a course preset</li>
  <li>Load corresponding JSON from <code>/assets</code></li>
  <li>Update reactive state (Signals)</li>
  <li>Render UI dynamically via components</li>
</ol>

<hr/>

<h2>🛠️ Tech Stack</h2>

<ul>
  <li>Angular (Standalone + Signals)</li>
  <li>TypeScript</li>
  <li>Bootstrap</li>
  <li>HTML / CSS</li>
</ul>

<hr/>

<h2>📸 Use Cases</h2>

<ul>
  <li>Course platforms</li>
  <li>Product landing pages</li>
  <li>Marketing websites</li>
  <li>Content-driven applications</li>
</ul>

<hr/>

<h2>📈 Why This Project Matters</h2>

<ul>
  <li>Demonstrates separation of concerns</li>
  <li>Shows scalable frontend architecture</li>
  <li>Avoids hardcoded UI patterns</li>
  <li>Focuses on maintainability and reuse</li>
</ul>

<hr/>

<h2>🚧 Future Improvements</h2>

<ul>
  <li>CMS integration (headless)</li>
  <li>Authentication & user-specific content</li>
  <li>Admin panel for course editing</li>
  <li>Internationalization (i18n)</li>
</ul>

<hr/>

<h2>👨‍💻 Author</h2>

<p>
Gastón Omar Lino Levy<br/>
<a href="https://github.com/GastonLevy">GitHub Profile</a>
</p>
