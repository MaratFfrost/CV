import './App.css';



function App() {
  return (
    <>
      <header>
      <img className="photo" src="./images/image copy.png" alt="Profile" />
        <h1 style={{ fontSize: '340%' }}>MARAT MOROZOV</h1>
        <h2>Python Developer</h2>
        <p className="about">
          Minsk, Belarus |
          <a style={{ color: 'aliceblue', textDecoration: 'none' }} href="mailto:morozovmarat4@gmail.com"> morozovmarat4@gmail.com</a>
        </p>
      </header>

      <main style={{ padding: '20px' }}>
        {/* Profile div */}
        <div id="profile">
          <h2 className="category">About</h2>
          <p className="info">
            I am a passionate beginner Python developer with a strong interest in backend development.
            My journey into programming began with a curiosity about how web applications work behind the scenes.
          </p>
        </div>

        {/* Skills div */}
        <div className="skills">
          <h2 className="category">Skills & Technologies</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {['Python', 'FastAPI', 'Docker', 'Docker Compose', 'PostgreSQL', 'SQLAlchemy', 'Redis', 'DynamoDB', 'Celery', 'RabbitMQ', 'HTML & CSS', 'React'].map(skill => (
              <span className="tech" key={skill}>{skill}</span>
            ))}
          </div>
        </div>

        {/* Work div */}
        <div className="work">
          <h2 className="category">Work Experience</h2>
          <p style={{ fontSize: '170%' }}>
            <strong><a style={{ fontSize: '120%', textDecoration: 'none', color: 'red' }} href="https://whitesnake.by/">WhiteSnake</a></strong><br />
            (November 2024 – Present)
          </p>
        </div>

        {/* Education div */}
        <div className="education">
          <h2 className="category">Education</h2>
          <p style={{ fontSize: '170%' }}><strong>Belarusian State University</strong></p>
          <p style={{ fontSize: '140%' }}>Bachelor's Degree, Faculty of Mechanics and Mathematics (September 2023 – Present)</p>
        </div>

        {/* Languages div */}
        <div className="languages">
          <h2 className="category">Languages</h2>
          <ul>
            <li className="language">English - B1</li>
            <li className="language">Russian - C2</li>
          </ul>
        </div>

        {/* Projects div */}
        <div className="projects">
          <h2 className="category">Projects</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            {/* Project 1 */}
            <a href="https://github.com/MaratFfrost/fastapi-booking.git" className="project" style={{ textDecoration: 'none', color: 'inherit' }}>
              <h2>API for Booking</h2>
              <img src="./images/booking.png" alt="Booking API" style={{ width: '100%', height: 'auto', borderRadius: '5px' }} />
              <p className="name">A booking API built with FastAPI and PostgreSQL.</p>
              <p className="technics"><strong>Technologies:</strong> Python, FastAPI, Docker, PostgreSQL, Celery, DynamoDB</p>
            </a>

            {/* Project 2 */}
            <a href="https://github.com/MaratFfrost/fastapi_internet_shop.git" className="project" style={{ textDecoration: 'none', color: 'inherit' }}>
              <h2>API for Shop</h2>
              <img src="./images/internetshop.png" alt="Shop API" style={{ width: '100%', height: 'auto', borderRadius: '5px' }} />
              <p className="name">An e-commerce API with advanced features.</p>
              <p className="technics"><strong>Technologies:</strong> Python, FastAPI, Docker, PostgreSQL, RabbitMQ</p>
            </a>

            {/* Project 3 */}
            <a href="https://github.com/MaratFfrost/react-todo-list.git" className="project" style={{ textDecoration: 'none', color: 'inherit' }}>
              <h2>Todo App</h2>
              <img src="./images/TodoApp.png" alt="Todo App" style={{ width: '100%', height: 'auto', borderRadius: '5px' }} />
              <p className="name">A simple todo application with CRUD functionality.</p>
              <p className="technics"><strong>Technologies:</strong> React, HTML, CSS</p>
            </a>

            {/* Project 4 */}
            <a href="https://github.com/MaratFfrost/react-todo-list.git" className="project" style={{ textDecoration: 'none', color: 'inherit' }}>
              <h2>Tic Tac Toe</h2>
              <img src="./images/image.png" alt="Tic Tac Toe App" style={{ width: '100%', height: 'auto', borderRadius: '5px' }} />
              <p className="name">A simple tic tac toe game.</p>
              <p className="technics"><strong>Technologies:</strong> Vanilla JavaScript, HTML, CSS</p>
            </a>
          </div>
        </div>

        {/* Links div */}
        <div>
          <h2 className="category">Links</h2>
          <ul>
            <li><a className="link" href="https://t.me/mamkin_modnik" target="_blank" rel="noopener noreferrer">Telegram</a></li>
            <li><a className="link" href="https://github.com/MaratFfrost" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a className="link" href="mailto:morozovmarat4@gmail.com" target="_blank" rel="noopener noreferrer">Email</a></li>
            <li><a className="link" href="https://www.linkedin.com/in/marat-morozov-265309334" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>
      </main>
    </>
  );
}

export default App;
