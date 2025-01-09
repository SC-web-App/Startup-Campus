import ./events.css;

export const Events = () => {
    return(
<body>

<header>
  <a href="javascript:history.back()" style="text-decoration: none; color: #007bff;">←</a>
</header>

<main>
  <div className="header-row">
    <h1>Startup 4.0 Competition</h1>
    <div className="time-date">
      <div className="time-block">
        <span>Time:</span>
        <strong>2:30pm</strong>&nbsp;
      </div>
      <div className="date-block">
        <span>Date:</span>
        <strong>Nov 28</strong>
      </div>
    </div>
  </div>
  <p className="description">
    Collaborate to develop sustainable solutions addressing the UN’s SDG. Collaborate to develop sustainable solutions addressing the UN’s SDG. Collaborate to develop sustainable solutions addressing the UN’s SDG. Collaborate to develop sustainable solutions addressing the UN’s SDG...
  </p>
  
  <h2>Want to Participate? Register here</h2>
  <form>
    <div className="form-grid">
      <div className="form-column">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="John D"/>
        
        <label htmlFor="level">Level</label>
        <input type="text" id="level" name="level" placeholder=""/>
      </div>
      
      <div className="form-column">
        <label htmlFor="department">Department</label>
        <input type="text" id="department" name="department" placeholder=""/>
        
        <label htmlFor="expectations">What are your expectations?</label>
        <textarea id="expectations" name="expectations" rows='4' placeholder=""></textarea>
      </div>
    </div>
    
    <button type="submit" className="submit submit-button">SUBMIT</button>
  </form>
</main>

<footer>
  <div className="footer-links">
    <a href="#about">About</a>
    <a href="#become-a-lead">Become a lead</a>
    <a href="#contact">Contact</a>
    <a href="#startups">Startups</a>
  </div>
  <div className="social-icons">
    <a href="#"><i>Li</i></a>
    <a href="#"><i>In</i></a>
    <a href="#"><i>Fa</i></a>
    <a href="#"><i>X</i></a>
  </div>
  <p>Copyright Nile Startup Campus 2024</p>
</footer>

</body>
    )
}