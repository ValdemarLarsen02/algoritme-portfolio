import assert from "assert";
import { linearSearch } from "./linearsearch.js";

describe("linearSearch", function () {
  describe("searching", function () {
    let data = [];
    before(function () {
      // hardcode a small dataset 
      data = [1,2,3,4,5];
      // (doesn't have to be in before function, but then we have a pattern to reuse)
    });

    describe("find first", function () {
      it("should return found @ index 0", function () {
        const result = linearSearch(1, data);
        assert.equal(result.found, true);
        assert.equal(result.index, 0);
      });
    });

    describe("find last", function () {
      it("should return found @ index 4", function () {
        const result = linearSearch(5, data);
        assert.equal(result.found, true);
        assert.equal(result.index, 4);
      });
    });

    describe("not found", function () {
      it("should return not found @ index -1", function () {
        const result = linearSearch(241, data);
        assert.equal(result.found, false);
        assert.equal(result.index, -1);
      });
    });
  });

  // *** search larger dataset ***

  describe("searching large datasets", function () {
    // create a large dataset once, in before function
    const size = 100000;
    let data = [];
    before(function () {
      for(let i=0; i < size; i++) {
        data[i] = i+1;
      }
    });

    describe("find first", function () {
      it("should return found @ index 0", function () {
        const result = linearSearch(1, data);
        assert.equal(result.found, true);
        assert.equal(result.index, 0);
      });
    });

    describe("find last", function () {
      it("should return found @ index "+(size-1), function () {
        const result = linearSearch(size, data);
        assert.equal(result.found, true);
        assert.equal(result.index, size-1);
      });
    });

    describe("not found", function () {
      it("should return not found @ index -1", function () {
        const result = linearSearch(123456, data);
        assert.equal(result.found, false);
        assert.equal(result.index, -1);
      });
    });
  });

  // *** counting iterations in sorted data ***

  describe("iterations - sorted data", function () {
    // create a large dataset once, in before function
    const size = 100000;
    let data = [];
    before(function () {
      for(let i=0; i < size; i++) {
        data[i] = i+1;
      }
    });

    describe("find first", function () {
      it("should return found after 1 iteration", function () {
        const result = linearSearch(1, data);
        assert.equal(result.found, true);
        assert.equal(result.iterations, 1);
      });
    });

    describe("find last", function () {
      it(`should return found after ${size} iterations`, function () {
        const result = linearSearch(size, data);
        assert.equal(result.found, true);
        assert.equal(result.iterations, size);
      });
    });

    describe("not found", function () {
      it(`should return not found after ${size} iterations`, function () {
        const result = linearSearch(123456, data);
        assert.equal(result.found, false);
        assert.equal(result.iterations, size);
      });
    });
  });

  // *** counting iterations in random data ***

  describe("iterations - random data", function () {
    // create a large dataset once, in before function
    const size = 100000;
    let data = [];
    before(function () {
      // create a (sorted) list of numbers
      let numbers = []
      for(let i=0; i < size; i++) {
        numbers[i] = i+1;
      }
      // shuffle them into data
      while(numbers.length>0) {
        const index = Math.floor(Math.random()*numbers.length);
        data.push(numbers[index]);
        numbers.splice(index, 1);
      }
    });

    describe("find lowest", function () {
      it(`should return found after less than ${size} iterations`, function () {
        const result = linearSearch(1, data);
        assert.equal(result.found, true);
        assert.ok(result.iterations < size);
      });
    });

    describe("find last", function () {
      it(`should return found after ${size} iterations`, function () {
        const result = linearSearch(size, data);
        assert.equal(result.found, true);
        assert.ok(result.iterations < size);
      });
    });

    describe("not found", function () {
      it(`should return not found after ${size} iterations`, function () {
        const result = linearSearch(123456, data);
        assert.equal(result.found, false);
        assert.equal(result.iterations, size);
      });
    });
    
  });
  

});