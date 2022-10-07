import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Eventitem from "./Eventitem";
import axios from "axios";
import { getEvents } from "./EventHelper";

export default function Eventlist() {
  const { isLoading, data } = useQuery("events", () => getEvents());

  if (isLoading) {
    return <div className="container mt-5">Loading ...</div>;
  }

  return (
    <div className="container" id="eventtable">
      <div className="container">
        <table className="table mt-5">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Date</th>
              <th scope="col">Name</th>
              <th scope="col">Artist</th>
              <th scope="col">Price</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {data.data.map((event) => (
              <Eventitem event={event} key={event.id} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
