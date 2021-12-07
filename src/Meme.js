import PropTypes from "prop-types";

const Meme = ({ deleteMeme, topText, bottomText, url, id }) => {
  const handleDeleteMeme = () => {
    deleteMeme(id);
  };

  return (
    <div className="Meme">
      <div className="container">
        <span className="top-text">{topText}</span>
        <img src={url} alt="a meme" />
        <span className="bottom-text">{bottomText}</span>
        <button id="meme-deleteBtn" onClick={handleDeleteMeme}>
          DELETE
        </button>
      </div>
    </div>
  );
};

Meme.propTypes = {
  topText: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  bottomText: PropTypes.string.isRequired,
};

export default Meme;
