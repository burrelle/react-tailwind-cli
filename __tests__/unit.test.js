const stdout = require("test-console").stdout;

describe("Unit Tests", () => {
  it("Displays a menu", () => {
    let output = stdout.inspectSync(function() {
      require("../bin/react-tailwind");
    });
    expect(output[1]).toContain("React-Tailwind CLI");
    expect(output[1]).toContain("Description");
    expect(output[1]).toContain("Usage");
    expect(output[1]).toContain("Arguments");
    expect(output[1]).toContain("Options");
  });
});
