class SingletonTs {
  private static instance: SingletonTs;
  public ramdom: number;

  private constructor() {
    this.ramdom = Math.random();
  }

  public static getInstance(): SingletonTs {
    if (!this.instance) {
      this.instance = new SingletonTs();
    }

    return this.instance;
  }
}

const singleton = SingletonTs.getInstance();
const singleton2 = SingletonTs.getInstance();

console.log(singleton.ramdom);
console.log(singleton2.ramdom);
