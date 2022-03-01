import React from "react";
import { IPerson } from "../interfaces/IPerson";

interface PersonsPropTypes {
  persons: IPerson[];
}

const Persons: React.FC<PersonsPropTypes> = ({
  persons
}: {
  persons: IPerson[];
}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">No</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
        </tr>
      </thead>
      <tbody>
        {persons.map((person: IPerson) => {
          const { id, firstName, lastName }: IPerson = person;
          return (
            <tr key={id}>
              <th scope="row">{id}</th>
              <td>{firstName}</td>
              <td>{lastName}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Persons;
