import { Link } from 'react-router-dom';

const Reports = () => {
  return (
    <>
      <div>Iam Reports page</div>

      <Link
        to="/"
        style={{
          marginTop: '50px',
          padding: '10px',
          backgroundColor: 'rgb(255, 117, 29)',
          display: 'inline-block',
          color: 'white',
        }}
      >
        To main page
      </Link>
    </>
  );
};

export default Reports;
