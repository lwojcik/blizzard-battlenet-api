import constants from '../../../../lib/constants';

const { OAUTH_CHECK_TOKEN_URIS } = constants;

describe('OAUTH_CHECK_TOKEN_URIS', () => {
  test('should be defined', () => {
    expect(OAUTH_CHECK_TOKEN_URIS).toBeDefined();
  });

  test('should be frozen', () => {
    expect(Object.isFrozen(OAUTH_CHECK_TOKEN_URIS)).toBe(true);
  });

  test('should contain 4 elements', () => {
    expect(Object.keys(OAUTH_CHECK_TOKEN_URIS).length).toStrictEqual(4);
  });

  test('should contain property "1"', () => {
    expect(OAUTH_CHECK_TOKEN_URIS[1]).toBeDefined();
  });

  test('property "1" should be equal to "https://us.battle.net/oauth/check_token?token="', () => {
    expect(OAUTH_CHECK_TOKEN_URIS[1]).toStrictEqual('https://us.battle.net/oauth/check_token?token=');
  });

  test('should contain property "2"', () => {
    expect(OAUTH_CHECK_TOKEN_URIS[2]).toBeDefined();
  });

  test('property "2" should be equal to "https://eu.battle.net/oauth/check_token?token="', () => {
    expect(OAUTH_CHECK_TOKEN_URIS[2]).toStrictEqual('https://eu.battle.net/oauth/check_token?token=');
  });

  test('should contain property "3"', () => {
    expect(OAUTH_CHECK_TOKEN_URIS[3]).toBeDefined();
  });

  test('property "3" should be equal to "https://apac.battle.net/oauth/check_token?token="', () => {
    expect(OAUTH_CHECK_TOKEN_URIS[3]).toStrictEqual('https://apac.battle.net/oauth/check_token?token=');
  });

  test('should contain property "5"', () => {
    expect(OAUTH_CHECK_TOKEN_URIS[5]).toBeDefined();
  });

  test('property "5" should be equal to "https://www.battlenet.com.cn/oauth/check_token?token="', () => {
    expect(OAUTH_CHECK_TOKEN_URIS[5]).toStrictEqual('https://www.battlenet.com.cn/oauth/check_token?token=');
  });
});
