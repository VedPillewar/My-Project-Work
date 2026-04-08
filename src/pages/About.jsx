function About() {
  return (
    <div className="card">
      <h2>ℹ️ About This Project</h2>

      <p><strong>Name:</strong> Ved Pillewar</p>
      <p><strong>Course:</strong> ECS Engineering</p>

      <h3>Features:</h3>
      <ul style={{ textAlign: "left" }}>
        <li>✔ Task Management</li>
        <li>✔ Routing (React Router)</li>
        <li>✔ Event Handling</li>
        <li>✔ Search & Filter</li>
        <li>✔ Priority System</li>
        <li>✔ Data Persistence (localStorage)</li>
      </ul>
    </div>
  );
}

export default About;