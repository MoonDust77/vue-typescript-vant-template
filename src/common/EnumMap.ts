/*
 * @Title: EnumMap.ts
 * @Package: dsample
 * @Description: 枚举 Map 类
 * @Author: akai
 * @Date: 2020-04-17 11:42:06
 * @Version: 0.1.0
 * @Copyright: 2020 Shenzhen Hive Box Technology Co.,Ltd All rights reserved.
 * @Note:
 */

export class EnumMap extends Map<number | string, string> {
  public static toArray(enumMap: EnumMap): any[] {
    const array: any = []
    for (const [key, value] of enumMap) {
      array.push({
        value: key,
        text: value
      })
    }
    return []
  }

  public toArray(
    keyName = 'value',
    valueName = 'text',
    omit: any[] = []
  ): any[] {
    const array: any = []
    for (const [key, value] of this) {
      if (omit.includes(key)) {
        // 排除指定元素
        continue
      }

      const item: any = {}
      item[keyName] = key
      item[valueName] = value

      array.push(item)
    }
    return array
  }
}
