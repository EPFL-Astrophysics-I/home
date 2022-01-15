import './Chapter.css';

export default function Chapter({ props }) {
  return (
    <div className='chapter' id={props.id}>
      <h1 className='chapter-h1'>
        CHAPTER {props.index} : {props.title}
      </h1>
      <p className='chapter-p'>{props.description}</p>
    </div>
  );
}
