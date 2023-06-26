import { Layout } from 'antd';

const { Footer } = Layout;

const FooterApp = () => {
  return (
    <div>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        <span style={{ color: '#1E90FF', fontWeight: 'bold' }}> Moni {" "} </span>
        créé par {" "}
        <a
          href="https://www.linkedin.com/in/thomas-chalanson/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Thomas Chalanson
        </a>
      </Footer>
    </div>
  );
};

export default FooterApp;
