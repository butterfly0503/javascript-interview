import { Response, Server } from "miragejs"

import mockJson from "./mock-json.json"
import mockXml from "./mock-xml.xml"

const server = new Server({
    urlPrefix: "http://localhost:8000/",
    namespace: "",
    routes() {
      this.get("/api/json", (schema, request) => {
        return new Response(
          200,
          {"Content-Type":  "application/json"},
          mockJson
        );
      });
      this.get("/api/xml", (schema, request) => {
        return new Response(
          200,
          {"Content-Type":  "application/xml"},
          mockXml
        );
      });
    },
});

server.passthrough();