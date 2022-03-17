import './Chapter.css';

export default function Chapter({ props }) {
  const id = 'chapter' + props.index;
  const imageID = id + '-image';

  let image;
  if (props.image) {
    image = <img id={imageID} src={props.image} alt={imageID}></img>;
  }

  let video;
  if (props.video) {
    video = (
      <video width='512' height='512' loop autoPlay muted>
        <source src={props.video} type='video/mp4' />
      </video>
    );
  }

  let appList;
  if (props.apps) {
    appList = props.apps.map((text, index) => {
      let textColor = 'black';
      if (props.status) {
        if (props.status[index] === 'InProgress') {
          textColor = '#c0c0c0';
        }
      }
      return (
        <li className='app-li' key={index} style={{ color: textColor }}>
          {text}
        </li>
      );
    });
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
          <a className='chapter-button' href={props.link}>
            Learn more
          </a>
        </div>
      </div>
      <div className='chapter-image'>{image}</div>
      <div className='chapter-video'>{video}</div>
    </div>
  );
}
