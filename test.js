import { toRoman } from './index';
import { strictEqual } from "assert";

describe(('Conversión a números romanos'), () => {
  it('test 1', () => { strictEqual(toRoman(1), "I") });
  it('test 2', () =>{ strictEqual(toRoman(2), "II")});
  it('test 3', () =>{ strictEqual(toRoman(3), "III")});
  it('test 4', () =>{ strictEqual(toRoman(4), "IV")});
  it('test 5', () =>{ strictEqual(toRoman(5), "V")});
  it('test 6', () =>{ strictEqual(toRoman(7), "VII")});
  it('test 7', () =>{ strictEqual(toRoman(9), "IX")});
  it('test 8', () =>{ strictEqual(toRoman(10), "X")});
  it('test 9', () =>{ strictEqual(toRoman(11), "XI")});
  it('test 10', () =>{ strictEqual(toRoman(14), "XIV")});
  it('test 11', () =>{ strictEqual(toRoman(16), "XVI")});
  it('test 12', () =>{ strictEqual(toRoman(20), "XX")});
  it('test 13', () =>{ strictEqual(toRoman(23), "XXIII")});
  it('test 14', () =>{ strictEqual(toRoman(24), "XXIV")});
  it('test 15', () =>{ strictEqual(toRoman(28), "XXVIII")});
  it('test 16', () =>{ strictEqual(toRoman(30), "XXX")});
  it('test 17', () =>{ strictEqual(toRoman(34), "XXXIV")});
  it('test 18', () =>{ strictEqual(toRoman(36), "XXXVI")});
  it('test 19', () =>{ strictEqual(toRoman(40), "XL")});
  it('test 20', () =>{ strictEqual(toRoman(50), "L")});
  it('test 21', () =>{ strictEqual(toRoman(123), "CXXIII")});
  it('test 22', () =>{ strictEqual(toRoman(150), "CL")});
  it('test 23', () =>{ strictEqual(toRoman(340), "CCCXL")});
  it('test 24', () =>{ strictEqual(toRoman(440), "CDXL")});
})