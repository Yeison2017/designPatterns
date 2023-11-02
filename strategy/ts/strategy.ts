interface Strategy {
  login(user: string, password: string): boolean;
}

class LoginContext {
  private strategy: Strategy;

  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  login(user: string, password: string) {
    return this.strategy.login(user, password);
  }
}

class LoginDBStrategy implements Strategy {
  login(user: string, password: string) {
    console.log("Conectando con la base de datos");
    if (user === "admin" && password === "12345") {
      return true;
    }
    return false;
  }
}

class LoginServiceStrategy implements Strategy {
  login(user: string, password: string) {
    console.log("Conectando con servicio de autenticación");
    if (user === "admin" && password === "12345") {
      return true;
    }
    return false;
  }
}

class LoginGoogleStrategy implements Strategy {
  login(user: string, password: string) {
    console.log("Conectando con Google de autenticación");
    if (user === "admin" && password === "12345") {
      return true;
    }
    return false;
  }
}

const auth = new LoginContext(new LoginDBStrategy());
const resp = auth.login("admin", "12345");
auth.setStrategy(new LoginServiceStrategy());
auth.login("admin", "12345");
auth.setStrategy(new LoginGoogleStrategy());
auth.login("admin", "12345");
