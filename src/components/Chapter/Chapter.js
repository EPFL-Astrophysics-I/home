import './Chapter.css';

export default function Chapter({ props }) {
  const id = 'chapter' + props.index;
  const imageID = id + '-image';

  let image;
  if (props.image) {
    image = <img id={imageID} src={props.image} alt={imageID}></img>;
  }

  let appList;
  if (props.apps) {
    appList = props.apps.map((text, index) => (
      <li className='app-li' key={index}>
        {text}
      </li>
    ));
  }

  const flexDirection = props.index % 2 === 0 ? 'row-reverse' : 'row';

  return (
    <div className='chapter' id={id} style={{ flexDirection: flexDirection }}>
      <div className='chapter-contents'>
        <div className='chapter-info'>
          <h1 className='chapter-title'>
            Chapter {props.index} : {props.title}
          </h1>
          <p className='chapter-text'>{props.description}</p>
          <ul className='chapter-apps-ul'>{appList}</ul>
          <button className='chapter-button'>Learn more</button>
        </div>
      </div>
      <div className='chapter-image'>{image}</div>
    </div>
  );
}
