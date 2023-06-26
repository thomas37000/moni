import { useState, useEffect } from 'react';
import { supabase } from '../api/supabase';
import './about.css';

const About = () => {
  const [logos, setLogos] = useState(null);
  console.log('ticketDetail', logos);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getImg();
  }, []);

  async function getImg() {
    try {
      const { data, error } = await supabase.from('assets').select('*');

      if (error) {
        console.error(error);
        setError(error);
      } else {
        setLogos(data);
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
      setError(error);
      setLoading(false);
    }
  }

  if (loading) return <p>Loading ...</p>;
  if (error !== null) return <p>Problème avec l`&apos;`Api...</p>;

  return (
    <div className="about">
      <span className="moni-span">Moni </span> est une application de gestion
      des dépenses réalisé avec <span>Vite </span>
      pour le Front,
      <div>
        <span>Supabase</span> pour le Back-end et <span>Ant design</span> pour
        les composants
      </div>
      <div className="about-cards">
        {logos?.map((logo) => (
          <div key={logo.id} className="about-card">
            <img src={logo.img_url} alt={logo.alt} />
            <p>{logo.desc}</p>

            <div className="about-link">
              <a href={logo.link} rel="noopener noreferrer" target="_blank">
                Infos
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
