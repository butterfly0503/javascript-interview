import { useState, useEffect } from "react";

import { IPerson } from "../interfaces/IPerson";
import { getPersons } from "../services/personService";

export const usePersons = (): IPerson[] => {
  const [persons, setPersons] = useState<IPerson[]>([]);

  useEffect(() => {
    getPersons().then((personsData: IPerson[]) =>
      setPersons(
        personsData.sort((a: IPerson, b: IPerson): number => {
          if (a.id > b.id) return 1;
          if (a.id < b.id) return -1;
          return 0;
        })
      )
    );
  }, []);

  return persons;
};
