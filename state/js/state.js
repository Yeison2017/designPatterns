class DocumentContext {
  constructor() {
    this.content = "";
    this.state = new BlankState();
  }

  setState(state) {
    this.state = state;
  }

  write(text) {
    this.state.write(this, text);
  }
}

class BlankState {
  write(documentContext, text) {
    documentContext.content = text;
    documentContext.setState(new WithContentState());
  }
}

class WithContentState {
  write(documentContext, text) {
    documentContext.content += " " + text;
  }
}

class ApprovedState {
  write(documentContext, text) {
    console.error("Documento aprobado ya no se modifica");
  }
}

const doc = new DocumentContext();
console.log(doc.state);
doc.write("Hello");
console.log(doc.content);
console.log(doc.state);
doc.write("Algo");
doc.write("mas");
console.log(doc.content);

doc.setState(new ApprovedState());
console.log(doc.state);
doc.write("Otra cosa");
console.log(doc.content);

doc.setState(new WithContentState());
console.log(doc.state);
doc.write("No que no");
console.log(doc.content);
