import axios from "axios";
import { xml2json } from "xml-js";

import { IPerson } from "../interfaces/IPerson";

export const getPersons = async (): Promise<IPerson[]> => {
  const api1 = axios.get("http://localhost:8000/api/json");
  const api2 = axios.get("http://localhost:8000/api/xml", {
    responseType: "text"
  });

  const data = await Promise.all([api1, api2]);

  const data1: IPerson[] = data[0].data.person;
  const data2: IPerson[] = JSON.parse(
    xml2json(data[1].data.data, { compact: true, spaces: 2 })
  ).persons.person.map((value: any) => {
    return {
      id: parseInt(value.id._text),
      firstName: value.firstName._text,
      lastName: value.lastName._text
    };
  });

  const persons: IPerson[] = [...data1, ...data2];
  return persons;
};
