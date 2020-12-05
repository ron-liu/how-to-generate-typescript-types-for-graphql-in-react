import React from "react";
import { useGetAllPeopleQuery } from "./generated/graphql-types";

function App() {
  const { loading, data, error } = useGetAllPeopleQuery({
    variables: { pageSize: 5 },
  });
  if (loading || error || !data) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <h1>Starwars characters</h1>
      {data?.allPeople?.people?.map((p) => (
        <div>
          {p?.name}: {p?.gender}, {p?.height}cm, born in {p?.birthYear}
        </div>
      ))}
    </>
  );
}

export default App;
