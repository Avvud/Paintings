import React from 'react';
import '../styles/about.css';

const About = () => {
  return (
    <div className="page about-page">
      <div className="about-container">
        {/* Header Section */}
        <div className="about-header">
          <h1>About the Artist</h1>
          <div className="header-divider"></div>
          <p className="subtitle">Master of Traditional Tanjore Painting</p>
        </div>

{/* Personal Profile Section */}
<section className="profile-section">
  <h2 className="section-title">
    <span className="icon">👤</span> Personal Profile
  </h2>
  <div className="profile-card">
    
    {/* WRAPPER for side-by-side layout */}
    <div className="profile-layout">
      
      {/* LEFT SIDE: Artist Photo */}
      <div className="artist-photo-sidebar">
        <div className="photo-frame-square">
          <img 
            src="images/artist.png" 
            alt="Kalaimamani Rtn. SV. RM. AVUDAYAPPAN" 
            className="artist-photo-square"
          />
        </div>
        <div className="artist-title">
          <h3>Kalaimamani</h3>
          <p>Tanjore Art Master</p>
        </div>
      </div>

      {/* RIGHT SIDE: Profile Table */}
      <div className="profile-info">
        <table className="profile-table">
          <tbody>
            <tr>
              <td className="label">Name</td>
              <td className="value">Kalaimamani Rtn. SV. RM. AVUDAYAPPAN</td>
            </tr>
            <tr>
              <td className="label">Father's Name</td>
              <td className="value">RM. SV. Ramanathan Chettiar</td>
            </tr>
            <tr>
              <td className="label">Date of Birth</td>
              <td className="value">7th July 1946</td>
            </tr>
            <tr>
              <td className="label">Family Details</td>
              <td className="value">Married and Blessed with One Son (Married)</td>
            </tr>
            <tr>
              <td className="label">Address</td>
              <td className="value">
                6-4/47, Elango Street, Sri Ram Nagar,<br />
                Kottaiyur - 630 106, Karaikudi Tk.<br />
                Sivagangai District
              </td>
            </tr>
            <tr>
              <td className="label">Phone & Cell</td>
              <td className="value">
                +91-4565-286123<br />
                +91-9443228612
              </td>
            </tr>
            <tr>
              <td className="label">Email</td>
              <td className="value">
                <a href="mailto:ramasav@rediff.mail.com">ramasav@rediff.mail.com</a><br />
                <a href="mailto:ravudayappan@yahoo.com">ravudayappan@yahoo.com</a>
              </td>
            </tr>
            <tr>
              <td className="label">Website</td>
              <td className="value">
                <a href="http://www.kalaimamani.com" target="_blank" rel="noopener noreferrer">
                  www.kalaimamani.com
                </a>
              </td>
            </tr>
            <tr>
              <td className="label">Qualification</td>
              <td className="value">Diploma in Drawing Free Hand & Colour Painting</td>
            </tr>
            <tr>
              <td className="label">Interested In</td>
              <td className="value">Reviving Tanjore Traditional Painting</td>
            </tr>
          </tbody>
        </table>
      </div>
      
    </div>
    {/* End of profile-layout wrapper */}
    
  </div>
</section>
        {/* Achievements Section */}
        <section className="achievements-section">
          <h2 className="section-title">
            <span className="icon">🏆</span> Key Achievements
          </h2>
          <div className="achievement-cards">
            <div className="achievement-card">
              <div className="achievement-number">108</div>
              <h3>"Pillayar Patty Pillayar" Glass Paintings</h3>
              <p>Reverse Style - Painted within a month</p>
              <p className="date">19.06.1994 to 19.07.1994</p>
              <p className="note">Created with family</p>
            </div>
            <div className="achievement-card">
              <div className="achievement-number">30</div>
              <h3>Silappathiharam Story</h3>
              <p>Traditional Tanjore Paintings</p>
              <p className="note">Complete epic series</p>
            </div>
          </div>
        </section>

        {/* Exhibition Locations */}
        <section className="exhibitions-section">
          <h2 className="section-title">
            <span className="icon">🖼️</span> Notable Display Locations
          </h2>
          <div className="exhibition-list">
            {exhibitionData.map((item, index) => (
              <div className="exhibition-item" key={index}>
                <div className="exhibition-marker">{index + 1}</div>
                <div className="exhibition-details">
                  <h4>{item.title}</h4>
                  <p className="location">{item.location}</p>
                  {item.date && <p className="date">{item.date}</p>}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Training & Exhibitions Conducted */}
        <section className="training-section">
          <h2 className="section-title">
            <span className="icon">🎨</span> Training Centre
          </h2>
          <div className="info-card">
            <p>Drawing School through Tamil Nadu Government Trysum Scheme</p>
            <p className="years">1993-94 & 1994-95</p>
          </div>
        </section>

        <section className="conducted-exhibitions">
          <h2 className="section-title">
            <span className="icon">🌟</span> Exhibitions Conducted
          </h2>
          <div className="exhibition-grid">
            {conductedExhibitions.map((item, index) => (
              <div className="exhibition-card" key={index}>
                <h4>{item.title}</h4>
                <p>{item.details}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Media Appreciation */}
        <section className="media-section">
          <h2 className="section-title">
            <span className="icon">📰</span> Media Coverage
          </h2>
          
          <div className="media-grid">
            <div className="media-card">
              <h3>📰 Newspapers (India)</h3>
              <ul className="media-list">
                <li>The Hindu</li>
                <li>Indian Express</li>
                <li>Thinamani</li>
                <li>Daily Thandi</li>
                <li>Thina Malar</li>
                <li>Malai Malar</li>
                <li>Malayala Manorama</li>
                <li>Thina Karan</li>
                <li>Thina Boomi</li>
                <li>Anantha Vikatan</li>
                <li>Kumatham</li>
                <li>Nagarathar Kural</li>
                <li>Nagarathar Malar</li>
                <li>Nagarathar Edhal</li>
                <li>Aachi Vanthachu</li>
              </ul>
            </div>

            <div className="media-card">
              <h3>📻 Radio Programs</h3>
              <ul className="media-list">
                <li><strong>India:</strong> All India Radio Madurai (29.08.1991)</li>
                <li><strong>Malaysia:</strong> Malaysia Radio (09.05.1992)</li>
                <li><strong>Singapore:</strong> Singapore Radio (30.06.1992)</li>
              </ul>
            </div>

            <div className="media-card">
              <h3>📺 Television Programs</h3>
              <ul className="media-list">
                <li><strong>Doordarsan:</strong> 16.12.1990, 06.01.1991, 04.11.2000</li>
                <li><strong>Surya TV:</strong> 03.01.1999</li>
                <li><strong>Jaya TV:</strong> 03.08.2000, 06.08.2000</li>
                <li><strong>Malaysia TV:</strong> June 1992</li>
                <li><strong>Singapore TV:</strong> July 1992</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section className="awards-section">
          <h2 className="section-title">
            <span className="icon">🏅</span> Awards & Recognition
          </h2>
          
          <div className="awards-category">
            <h3>By Distinguished Personalities</h3>
            <div className="award-tags">
              <span className="award-tag">Mr. P. Chidambaram (Finance Minister)</span>
              <span className="award-tag">Supreme Court Justice Dr. AR. Lakshmanan</span>
              <span className="award-tag">Dr. A.C. Muthiah (Chairman, SPIC Group)</span>
              <span className="award-tag">Mr. S.K. Birla (Industrialist)</span>
              <span className="award-tag">Mr. R.P.G Goyenga</span>
              <span className="award-tag">Mr. Sababathi (Ex-Chairman, Bank of Madura)</span>
              <span className="award-tag">Kunnakkudi Vaithinathan</span>
            </div>
          </div>

          <div className="awards-category">
            <h3>By Voluntary Organisations</h3>
            <div className="award-list-detailed">
              <div className="award-item-detailed">
                <h4>Kalaimamani</h4>
                <p>Tamil Nadu Government, 2001</p>
              </div>
              <div className="award-item-detailed">
                <h4>Mahatma Gandhi Birth Centenary Memorial Award</h4>
                <p>Victoria Technical Institute Chennai, 03.09.1992</p>
              </div>
              <div className="award-item-detailed">
                <h4>Cash Award ₹10,000</h4>
                <p>By Hon. Finance Minister P. Chidambaram at OVIA VELVI Function, 31.04.1994, Karaikudi</p>
              </div>
              <div className="award-item-detailed">
                <h4>OVIA MANI</h4>
                <p>Kandanur Nagarathar, 1992</p>
              </div>
              <div className="award-item-detailed">
                <h4>OVIA VITHAHAR</h4>
                <p>Malaysian Newspaper Tamil Nesan</p>
              </div>
              <div className="award-item-detailed">
                <h4>KANNUL VINAIGNER</h4>
                <p>Kannadasan Vizha, Salem</p>
              </div>
              <div className="award-item-detailed">
                <h4>Lions Club of Trichy</h4>
                <p>Recognition Award</p>
              </div>
              <div className="award-item-detailed">
                <h4>Rotary Club Awards</h4>
                <p>Karaikudi (21.10.1991) & Devakottai</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact for Sales */}
        <section className="sales-section">
          <h2 className="section-title">
            <span className="icon">🎨</span> Exhibition & Sales
          </h2>
          <div className="sales-card">
            <p className="sales-intro">Our paintings are exhibited and available for sale at:</p>
            <div className="sales-locations">
              <div className="sales-location">
                <h4>Sri Ram Nagar</h4>
                <p>Main Exhibition Centre</p>
              </div>
              <div className="sales-location">
                <h4>Chennai</h4>
                <p>Mr. AV. Ramanathan</p>
                <p>G-2, Kalyan Flats, #43, 5th Main Road</p>
                <p>Nanganallur, Chennai – 600061</p>
                <p className="contact-detail">📞 +91-44-43585752</p>
                <p className="contact-detail">📱 +91-9884285507</p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

// Exhibition Data
const exhibitionData = [
  {
    title: '"Rishaba Arudar" 6\' x 4\' Glass Painting',
    location: 'Meenakshi Sundareswarar Temple, Kandanur, Sivagangai District',
    date: '08.02.1992'
  },
  {
    title: '"Dhasavadharam"',
    location: 'Indira Gandhi Rashtriya Manav Sangrahalaya (National Museum of Mankind), Bhopal'
  },
  {
    title: '"Meenakshi Thiru Kalyanam" 6\' x 4\'',
    location: 'SPIC Centre, Guindy, Chennai'
  },
  {
    title: '"Pillayar Patty Pillayar" 3\' x 2½\'',
    location: 'Sri Kanji Kamakodi Mutt, Kanchipuram'
  },
  {
    title: '"Vitoba Krishna" 20" x 16\'',
    location: 'Dr. O. Sambatham House, Florida, U.S.A.'
  },
  {
    title: '"Pillayar Patty Pillayar" Glass Painting',
    location: 'Dhandayuthapani Temple, Kuala Lumpur, Malaysia'
  },
  {
    title: '"Lord Muruga"',
    location: 'Dhandayuthapani Temple, Singapore'
  },
  {
    title: '"Natarajar" 2½\' x 2\'',
    location: 'Dr. A.C. Muthaiah House, Chettinad, Sivagangai Dist.'
  },
  {
    title: '"Pillayar Patty Pillayar" Glass Paintings',
    location: 'Dharmapuram Adhinam Mutt, Thiruppalathurai, Tanjore District'
  },
  {
    title: '"Ramar Pattabiseham" 6\' x 4\'',
    location: 'Hotel Subalakshmi Bhavanam, Karaikudi'
  },
  {
    title: '"Pillayar Patty Pillayar" 40" x 30"',
    location: 'Mr. S.K. Birla House, New Delhi'
  },
  {
    title: '"Thirupathy Venkatachalapathy" 40" x 30"',
    location: 'Mr. R.P. Goyenga House, New Delhi'
  },
  {
    title: '"Krishna with Rukmani" 20" x 16"',
    location: 'Deivanai House, U.S.A.'
  }
];

const conductedExhibitions = [
  { title: 'Lions Club of Trichy', details: '07.04.1990' },
  { title: 'South Zone Cultural Centre', details: 'Conoor & Ooty' },
  { title: 'Tamil Nadu Tourism Development Corporation', details: 'Conoor - Ooty, 28th to 31st January 1993' },
  { title: 'Indira Gandhi Rashtriya Manav Sangrahalaya', details: 'Devakottai, Sivagangai District, 18.07.1998' },
  { title: 'Ashtamudi Craft and Art Festival of India', details: 'Kollam - Kerala, 1998-1999' },
  { title: '"Parambarya" District Tourism Promotion Council', details: 'Kollam, Kerala, 1999-2000' },
  { title: 'International Exhibitions', details: 'Malaysia & Singapore, 1992' }
];

export default About;
