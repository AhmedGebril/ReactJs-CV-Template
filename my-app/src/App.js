import './App.css';
import { useEffect,useRef,useState} from 'react';
import Typed from 'typed.js';
import axios from 'axios'


function App() {
  const el = useRef(null);
  const [messageReceived, setMessageReceived] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  const sendForm = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/submit-form', formData);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [`I'm Ahmed Gebril.`, `I'm a full stack developer`],
      typeSpeed: 60,
      loop:true,
      backSpeed: 30,
      smartBackspace: false,
      autoInsertCss: true,
      showCursor: true,
      
    });
  }, []);
  return (
    <>
    <div className='w-100 bg-dark'>
    <div className='container'>
    <div className='vh-100 d-flex justify-content-center align-items-center '>
      <div className="text-center">
        <div className='mb-3'>
        <span ref={el} className='string-type'></span>
        </div>

        <div className='main-div'>
          <p className='main-p mb-5'>
            i'm a full stack developer who has alot of passion for developing , with experience working with django , reactjs , node js and mongoDB
          </p> 
         <a className='header-button'>About me</a>
         <a className='header-button2'>Contact me</a>
        </div>
      </div>
    </div>  
    </div>
          
    </div>
    <div className='bg-secondary'>
      <div className='p-5'>
        <div className='container bg-secondary'>
          <div className='mb-5'>
            <h1 className='text-white pt-5 about-me-headline'>About Me.</h1>
          </div>
          <div className='row mb-5'>
            <div className='col-md-7 me-5'>
              <p className=''>
                I'm passionate about developing beautiful and functional websites that provide a seamless user experience. As a law graduate, I have a unique perspective that allows me to approach web development challenges from a different angle, ensuring that my projects are not only technically sound but also legally compliant.
              </p>
              <p className='mb-5'>
                With experience in a variety of programming languages and frameworks, including React, Node.js, and MongoDB, I'm confident in my ability to tackle any project. Whether you're looking for a simple website or a complex web application, I'm here to help bring your vision to life.
              </p>
              <a className='header-button m-0' href='https://github.com/AhmedGebril'>My Github</a>
            </div>
            <div className='col-md-4'>
              <ul className='personal-list'>
                <li className='mb-3'>
                  <strong className='me-3 main-color'>Birthday : </strong>
                      17/5/1998
                </li>
                <li className='mb-3'>
                <strong className='me-3 main-color'>Age : </strong>
                      25
                </li>
                <li className='mb-3'>
                <strong className='me-3 main-color'>Email : </strong>
                      ahmedgebril1889@gmail.com
                </li>
                <li className='mb-3'>
                <strong className='me-3 main-color'>Phone : </strong>
                  01112772690
                </li>
                <li className='mb-3'>
                <strong className='me-3 main-color'>Github : </strong>
                  <a href='https://github.com/AhmedGebril'>   github.com/AhmedGebril</a>
                </li>
              </ul>
            </div>
        </div>
        <div className='row'>
              <div className='col-sm-6'>
                <h4 className='mb-4'>Coding skills</h4>
                <div className='mb-3'>
                  Html/css
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{width: '90%'}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">90%</div>
                  </div>
                </div>

                <div className='mb-3'>
                  Javascript
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{width: '90%'}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">90%</div>
                  </div>
                </div>
                <div className='mb-3'>
                  Python
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{width: '70%'}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">70%</div>
                  </div>
                </div>
                <div className='mb-3'>
                  React js 
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{width: '90%'}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">90%</div>
                  </div>
                </div>
                <div className='mb-3'>
                  Node js 
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{width: '90%'}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">90%</div>
                  </div>
                </div>
              </div>
              
              <div className='col-sm-6'>
                <h4 className='mb-4'>Personal Skills</h4>
                <div className='mb-3'>
                  Leadership
                  <div className='progress'>
                    <div className='progress-bar' style={{width: '70%'}}>70%</div>
                  </div>
                </div>
                
                <div className='mb-3'>
                  communication
                  <div className='progress'>
                    <div className='progress-bar' style={{width: '100%'}}>100%</div>
                  </div>
                </div>
                <div className='mb-3'>
                  Time management
                  <div className='progress'>
                    <div className='progress-bar' style={{width: '90%'}}>90%</div>
                  </div>
                </div>
                <div className='mb-3'>
                  Teamwork
                  <div className='progress'>
                    <div className='progress-bar' style={{width: '100%'}}>100%</div>
                  </div>
                </div>
                <div className='mb-3'>
                  creativity
                  <div className='progress'>
                    <div className='progress-bar' style={{width: '90%'}}>90%</div>
                  </div>
                </div>
              </div>
            </div>  
        </div>
            
      </div>
      <div className=' bg-dark'>
          <div className='container p-5'>
            <div className='d-flex justify-content-start align-items-center mb-5'>
              <h1 className='pt-5 about-me-headline'>What i Can Do.</h1>
            </div>
            <div className='row g-3'>
              <div className='col-md-4'>
                <div className='branding'>
                  <div className='mb-3'>
                  <i class="fa-solid fa-server fa-beat fa-2xl icon"></i>
                  </div>
                  <h2 className='mb-3'>Server Handling</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec nisi in risus suscipit varius vel ac leo. Nulla ullamcorper molestie mauris, non consectetur</p>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='branding'>
                  <div className='mb-3'>
                  <i class="fa-solid fa-database fa-beat-fade fa-2xl icon"></i>
                  </div>
                
                  <h2 className='mb-3'>Database Management</h2>
                  <p>Maecenas dignissim nunc quis pretium laoreet. In egestas dignissim mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce</p>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='branding'>
                  <div className='mb-3'>
                  <i className="fa-solid fa-brush fa-bounce fa-2xl icon"></i>
                  </div>

                  <h2 className='mb-3'>Design</h2>
                  <p>sapien non mi finibus sagittis. Nullam scelerisque consequat mauris. Orci varius natoque penatibus et magnis dis parturient montes,</p>
                </div>
              </div>
            </div>
          </div>
      </div>
      <div className='bg-secondary '>
        <div className='container p-5'>
          <div className='third-section-header mb-5'>
          <h1 className='pt-5 about-me-headline'>Experience.</h1>
          </div>
          <div className='row'>
            <div className='col-md-6 p-2'>
              <div className='experience p-2 mb-3'>
                  <p>Created Ecommerce full stack MERN app</p>
              </div>
              <div className='experience p-2 mb-3'>
                  <p>Created Gaming website using nodejs and reactjs</p>
              </div>
              <div className='experience p-2 mb-3'>
                  <p>created a simple blogpost using nodejs,expressjs and mongo atlas </p>
              </div>
            </div>
            <div className='col-md-6 p-2'>
              <div className='experience p-2 mb-3'>
                <p>Built a Django Ecommerce app endpoints</p>
              </div>
              <div className='experience  p-2 mb-3'>
                <p>Created a Blog Post website using flask </p>
              </div>
              <div className='experience  p-2 mb-3'>
                <p>Created a app to get the cheapest flights to a certain user destination </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-dark pt-5'>
      <div className='container'>
        <div className='mb-5 ps-4'>
          <h1 className='about-me-headline'>Get in touch</h1>
        </div>

      <div className='row'>
        <div className='col-md-6 contact-details p-5'>
          <i className="fas fa-map-marker-alt mb-2 fa-lg"></i> 
          <p>Address</p>
          <p className='mb-5'>Alexandria,Egypt</p>
          <i className="fas fa-phone mb-2 fa-lg"></i>
          <p>Phone Number</p>
          <p className='mb-5'>(123) 456-7890</p>
          <i className="fas fa-envelope mb-2 fa-lg"></i>
          <p className=''>Email</p>
          <p className=''>ahmedgebril1889@gmail.com</p>
        </div>
        <div className='col-md-6'>
        <form className='contact-form'>
      <div className='form-group'>
        <input type='text' name='name' value={formData.name} onChange={handleInputChange} className='form-control contact-form-input' placeholder='Name' />
      </div>
      <div className='form-group'>
        <input type='email' name='email' value={formData.email} onChange={handleInputChange} className='form-control contact-form-input' placeholder='Email' />
      </div>
      <div className='form-group'>
        <input type='text' name='subject' value={formData.subject} onChange={handleInputChange} className='form-control contact-form-input' placeholder='Subject' />
      </div>
      <div className='form-group'>
        <textarea name='message' value={formData.message} onChange={handleInputChange} className='form-control contact-form-input' rows='5' placeholder='Message'></textarea>
      </div>
      <button type='submit' onClick={sendForm} className='btn btn-primary'>Send Message</button>
    </form>
    {messageReceived && (
        <div className='alert alert-success mt-3'>
          <strong>Message received!</strong> Thank you for your message. We will get back to you soon.
        </div>
      )}
        </div>
      </div>
    </div>
      </div>
    </div>
    </>
  );
}

export default App;
