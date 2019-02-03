import { RegionIdArray, ConstantKeys } from '../../../../lib/types';
import * as utils from '../../../../lib/utils/common';

import regionIdsJson from '../../../__testData__/regionIds.json';
import wrongRegionIdsJson from '../../../__testData__/wrongRegionIds.json';
import constantKeysJson from '../../../__testData__/constantKeys.json';

const { getUriByRegionId } = utils;

/* tslint:disable no-expression-statement */
describe('getUriByRegionId()', () => {
  test('should be defined', () => {
    expect(getUriByRegionId).toBeDefined();
  });

  test('should be of type "function"', () => {
    expect(typeof getUriByRegionId).toBe('function');
  });

  (regionIdsJson as RegionIdArray).forEach(regionId => {
    (constantKeysJson as ConstantKeys).forEach(constantKey => {
      test('should return correct value for ${regionId} and ${constantKey} as valid parameters', () => {
        expect(getUriByRegionId(regionId, constantKey)).toMatchSnapshot();
      });
    });
  });

  (wrongRegionIdsJson as RegionIdArray).forEach(wrongRegionId => {
    (constantKeysJson as ConstantKeys).forEach(constantKey => {
      test('should throw RangeError for ${wrongRegionId} as invalid parameter', () => {
        expect(() => getUriByRegionId(wrongRegionId, constantKey)).toThrow(RangeError);
      });
    });
  });
});
/* tslint:enable no-expression-statement */
