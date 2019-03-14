import React from "react";

function NewsCards(props, id) {
  return (
    <div className="col-sm-4" key={id}>
      <div className="card mt-3 ml-3 rounded-1 shadow mx-auto text-center">
        <img className="card-img-top" src={props.image} alt={"News article"} />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <a href={props.url} target="noopener noreferrer">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}

export default NewsCards;
