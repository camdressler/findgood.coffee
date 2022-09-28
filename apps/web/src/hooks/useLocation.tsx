import React from "react";

import { useContext, useState } from "react";

const useTrackLocation = () => {
  // const [location, setLocation] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isTracking, setIsTracking] = useState(false);

  const success = (position) => {
    const { latitude, longitude } = position.coords;
    dispatch({
      type: ACTION_TYPES.SET_LAT_LNG,
      payload: {
        latLong: `${latitude},${longitude}`,
      },
    });
    // setLocation(`${latitude},${longitude}`);
    setErrorMsg("");
    setIsTracking(false);
  };
  const error = () => {
    setErrorMsg("Unable to retrieve your location");
    setIsTracking(false);
  };
  const handleTrackLocation = () => {
    setIsTracking(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      setErrorMsg("Geolocation is not supported by this browser.");
      setIsTracking(false);
    }
  };

  return {
    // location,
    handleTrackLocation,
    errorMsg,
    isTracking,
  };
};

export default useTrackLocation;
