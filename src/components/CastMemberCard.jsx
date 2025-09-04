import React from "react";

const CastMemberCard = ({ castMember }) => {
  const {
    name,
    image,
    nationality,
    biography,
    awards,
    birth_year,
    death_year,
    most_famous_movies,
    known_for,
  } = castMember;

  // Usa known_for se most_famous_movies non esiste
  const movies = most_famous_movies || known_for || [];

  return (
    <div className="card bg-dark text-white">
      <div className="card-header">
        <h3 className="card-title text-center">{name}</h3>
      </div>
      <div className="card-body text-center">
        <img src={image} alt={name} className="img-fluid" />
        <p>
          <strong>Anno di nascita:</strong> {birth_year}
        </p>
        {death_year && (
          <p>
            <strong>Anno di morte:</strong> {death_year}
          </p>
        )}
        <p>
          <strong>Nazionalità:</strong> {nationality}
        </p>
        <p>
          <strong>Biografia:</strong> {biography}
        </p>
        <p>
          <strong className="films">Film più famosi:</strong>
        </p>
        <ul className="list-unstyled films">
          {movies.map((movie, index) => (
            <li key={index}>{movie}</li>
          ))}
        </ul>
        <p className="premi">
          <strong>Premi:</strong>{" "}
          {Array.isArray(awards) ? awards.join(", ") : awards}
        </p>
      </div>
    </div>
  );
};

export default CastMemberCard;