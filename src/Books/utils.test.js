import { formatPrice } from "./utils";

describe("formatPrice(value)", () => {
  it.each`
        value     | expected
        ${1.0}    | ${"1,00 €"}
        ${1.1}    | ${"1,10 €"}
        ${0.0}    | ${"0,00 €"}
        ${4.198}  | ${"4,20 €"}
        ${1.333}  | ${"1,33 €"}
        ${0.119}  | ${"0,12 €"}
  `("$value should format to $expected", ({value, expected}) => {
    const res = formatPrice(value);
    expect(res).toBe(expected);
  });
});