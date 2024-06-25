import customDirectives from "@/directives";

export default function setCustomDirectives(app) {
  for(const [name, directive] of Object.entries(customDirectives)) {
    app.directive(name, directive)
  }
}
