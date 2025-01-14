import React from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoList from "components/PhotoList";

const PhotoDetailsModal = (props) => {
  const {
    clickedPhoto,
    photos,
    isPhotoFavorite,
    toggleFavoritePhoto,
    photoClickHandler,
    toggleModal,
  } = props;
  const photoId = clickedPhoto;

  const photo = photos.find((photo) => Number(photo.id) === Number(photoId));

  return (
    <div className="photo-details-modal">
      <button
        className="photo-details-modal__close-button"
        onClick={toggleModal}
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <img
        className="photo-details-modal__image"
        src={photo.urls.full}
        alt="picture"
      />
      <div className="photo-details-modal__photographer-details">
        <img
          className="photo-details-modal__photographer-profile"
          src={photo.user.profile}
          alt="photographer picture"
        />
        <p className="photo-details-modal__photographer-info">
          {photo.user.username}
          <br />
          <span className="photo-details-modal__photographer-location">
            {photo.location.city}
            {","}
          </span>
          <span className="photo-details-modal__photographer-location">
            {photo.location.country}
          </span>
        </p>
      </div>
      <div className="photo-details-modal__header ">
        <h3>Similar Photos</h3>
        <div className="photo-details-modal__images">
          <PhotoList
            photos={Object.values(photo.similar_photos)}
            isPhotoFavorite={isPhotoFavorite}
            toggleFavoritePhoto={toggleFavoritePhoto}
            // photoClickHandler={photoClickHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
