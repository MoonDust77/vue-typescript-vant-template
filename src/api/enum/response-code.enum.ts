/*
 * @Title: response-code.enum.ts
 * @Package: dsample
 * @Description: ResponseCode 枚举
 * @Author: akai
 * @Date: 2020-04-17 14:53:24
 * @Version: 0.1.0
 * @Copyright: 2020 Shenzhen Hive Box Technology Co.,Ltd All rights reserved.
 * @Note:
 */
import { EnumMap } from '@/common/EnumMap'

export enum ResponseCodeEnum {
  SUCCESS = 320100000,
  SUCCESSDSAMPLE = 360100000,
  SUCCESS_BASE = 300100000,
  SUCCESS_CONSUMER = 150100000,
  SUCCESS_SEND = 30100000,
  FAIL = 150100001,
  INVALID_PARAMS = 10005,
  SERVER_ERROR = 10006,

  SHOULD_BIND_WECHAT = 150200403,

  FORBIDDEN = 10010
}

export const ResponseCodeEnumMap = new EnumMap([
  [ResponseCodeEnum.SUCCESS, 'Success'],
  [ResponseCodeEnum.FAIL, 'Fail'],
  [ResponseCodeEnum.INVALID_PARAMS, 'Invalid Parameters'],
  [ResponseCodeEnum.SERVER_ERROR, 'Server Error'],

  [ResponseCodeEnum.FORBIDDEN, 'fail']
])
