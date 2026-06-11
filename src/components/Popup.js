import "./popup.scss"
const Popup = ({ data, onClose, isClosing }) => {
  if (!data) return null;
  
  return (
  <div
      className={`popup-backdrop ${isClosing ? "closing" : "opening"}`}
      onClick={onClose}
    >
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="popup-close" onClick={onClose}>
          ×
        </button>

        <img src={data.img} alt={data.title} className="popup-img" />

        <div className="popup-info">
          <p className="popup-category">{data.category}</p>
          {data.URL ? (
          <a  href={data.URL}
              target="_blank"
              rel="noreferrer"
              className="popup-title-link"
            >
              <h2>{data.title}</h2>
          </a>
          ) : (
            <h2>{data.title}</h2>
          )}
          {data.figma ? (
          <a  href={data.figma}
              target="_blank"
              rel="noreferrer"
              className="popup-title-link"
            >
              <h2>Figma</h2>
          </a>
          ) : (
            <p></p>
          )}
          <p>{data.description}</p>
          <p>{data.dday}</p>
          <p>{data.people}</p>
          <p>{data.techstack}</p>
          <p>{data.concept}</p>
          <p>{data.directory}</p>
          <p>{data.charge}</p>
          <p>{data.major}</p>
          <p>{data.trouble}</p>
          <div className="popup-images">
            {data.images?.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${data.title} 이미지 ${index + 1}`}
              />
            ))}
          </div>
          <ul className="popup-skills">
            {data.skills?.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>

          <div className="popup-links">
            {data.github && (
              <a href={data.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            )}

            {data.site && (
              <a href={data.site} target="_blank" rel="noreferrer">
                View Site
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;