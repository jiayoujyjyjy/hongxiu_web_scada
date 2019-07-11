/**
 * Created by 杜坤 on 2019/7/9.
*/

/**
 * 生成指定范围内的随机数
 * @param min
 * @param max
 * @returns {number}
 */
export function rangeNum (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
