import { Response, Server } from "miragejs";

import mockJson from "./mock-json.json";
import mockXml from "./mock-xml.xml";
import axios from "axios";

let xmlText = "";
(async function () {
  xmlText = await axios.get(mockXml, {
    "Content-Type": "application/xml; charset=utf-8"
  });
})();

const server = new Server({
  urlPrefix: "http://localhost:8000/",
  namespace: "",
  routes() {
    this.get(
      "/api/json",
      (schema, request) => {
        return new Response(
          200,
          { "Content-Type": "application/json" },
          mockJson
        );
      },
      { timing: 1000 }
    );
    this.get(
      "/api/xml",
      (schema, request) => {
        return new Response(
          200,
          { "Content-Type": "application/xml" },
          xmlText
        );
      },
      { timing: 2000 }
    );
  }
});
server.passthrough();
