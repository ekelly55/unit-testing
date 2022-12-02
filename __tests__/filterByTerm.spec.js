//spec is a convention borrowed from Ruby for marking the file as the specification for a given functionality
const filterByTerm = require("../src/filterByTerm");

//describe is a wrapper for related tests. it contains two parameters: a string for descritbing the test suite and a callback function for wrappign the test
describe("Filter function", () => {
    // actual test
    test("it should filter by a search term (link)", () => {
        const input = [
            { id: 1, url: "https://www.url1.dev" },
            { id: 2, url: "https://www.url2.dev" },
            { id: 3, url: "https://www.link3.dev" }
          ];
          const output = [{ id: 3, url: "https://www.link3.dev" }];
          expect(filterByTerm(input, "link")).toEqual(output);
          expect(filterByTerm(input, "LINK")).toEqual(output);
        });
        test("it should filter by a search term (url)", () => {
            const input = [
                { id: 1, url: "https://www.url1.dev" },
                { id: 2, url: "https://www.url2.dev" },
                { id: 3, url: "https://www.link3.dev" }
            ];
            const output = [{ id: 1, url: "https://www.url1.dev" }, { id: 2, url: "https://www.url2.dev"}];
            expect(filterByTerm(input, "url")).toEqual(output);
            
        });
        test("it should filter by a search term ( )", () => {
            const input = [
                { id: 1, url: "https://www.url1.dev" },
                { id: 2, url: "https://www.url2.dev" },
                { id: 3, url: "https://www.link3.dev" }
            ];
            const output = [];
            expect(filterByTerm(input, " ")).toEqual(output);
            
        });
    });
    // expect(filterByTerm(input, " ")).toEqual(output);

    //added coverage...it tells you what isn't covered by your tests so you know what to add?