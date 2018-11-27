/**
 * List of all available OAuth authorize uris
 * via https://develop.battle.net/documentation/guides/using-oauth
 */

import RegionIdProperties from '../../interfaces/RegionIdProperties';
import { AuthorizeUri } from '../../types/constants/oauth';

const oAuthAuthorizeUris: RegionIdProperties<AuthorizeUri> = {
  1: 'https://us.battle.net/oauth/authorize',
  2: 'https://eu.battle.net/oauth/authorize',
  3: 'https://apac.battle.net/oauth/authorize',
  5: 'https://www.battlenet.com.cn/oauth/authorize',
};

export default oAuthAuthorizeUris;
