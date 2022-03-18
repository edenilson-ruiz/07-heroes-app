<div className="col">
      <div className="card h-100">
        <img
          src={imagePath}
          className="card-img-top"
          alt={superhero}
        />
        <div className="card-body">
          <h5 className="card-title">{superhero}</h5>
          <p className="card-text">{alter_ego}</p>
          <p>
            {
              ( alter_ego !== characters ) 
                && <span>{characters}</span>
            }
          </p>
          <p className="card-text">
            {first_appearance}
          </p>
          <Link to={`/hero/${id}`}>Más...</Link>
        </div>
        <div className="card-footer">
          <small className="text-muted">{publisher}</small>
        </div>
      </div>
    </div>