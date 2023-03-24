import { Triangle } from 'react-loader-spinner';

const wrapperStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

export const Loader = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        marginTop: '10vh'
      }}
    >
      <Triangle
        height="80"
        width="80"
        color="rgb(255, 117, 29)"
        ariaLabel="triangle-loading"
        wrapperStyle={wrapperStyles}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};
