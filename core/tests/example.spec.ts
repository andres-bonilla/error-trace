import { example, wrapExample } from "../src/index";
import { expect } from "chai";

describe("example function", function () {
  it("should log the correct messages", function () {
    // Redirigimos console.log a un array para capturar los mensajes
    const logSpy: string[] = [];
    const originalLog = console.log;
    console.log = (message: string) => logSpy.push(message);

    example();

    expect(logSpy).to.include("Hola mundo!");
    expect(logSpy).to.include("Hola");
    expect(logSpy).to.include("mundo");
    expect(logSpy).to.include("!");

    logSpy.length = 0;

    wrapExample();

    expect(logSpy).to.include("Hola mundo!");
    expect(logSpy).to.include("Hola");
    expect(logSpy).to.include("mundo");
    expect(logSpy).to.include("!");

    // Restauramos el comportamiento original de console.log
    console.log = originalLog;
  });
});
