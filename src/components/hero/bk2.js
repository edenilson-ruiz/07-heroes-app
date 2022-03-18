<div className="h-42">
      <article className="rounded-lg shadow-lg h-1/12">
        <a href="#">
          <img
            alt={superhero}
            className="block h-auto w-full"
            src={imagePath}
          />
        </a>

        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
          <h1 className="text-lg">
            <a className="no-underline hover:underline text-black" href="#">
              {superhero}
            </a>
          </h1>
          <p className="text-grey-darker text-sm"></p>
        </header>
        <div className="flex items-left justify-between leading-tight p-2 md:p-4">
          <p>{alter_ego}</p>
          <p>
            {
              ( alter_ego !== characters ) 
                && chars.map((char) => <li>{char}</li>)
            }
          </p>
          <p>
            {first_appearance}
          </p>
          <Link to={`/hero/${id}`}>Más...</Link>
        </div>

        <footer className="flex items-center justify-between leading-none p-2 md:p-4">
          <a
            className="flex items-center no-underline hover:underline text-black"
            href="#"
          >
            <img
              alt="Placeholder"
              className="block rounded-full"
              width="32"
              height="32"
              src={(publisher === 'DC Comics') ? `/assets/dc-logo.png` : `/assets/marvel-logo.png`}
            />
            <p className="ml-2 text-sm">{publisher}</p>
          </a>
          <a
            className="no-underline text-grey-darker hover:text-red-dark"
            href="#"
          >
            <span className="hidden">Like</span>
            <i className="fa fa-heart"></i>
          </a>
        </footer>
      </article>
    </div>