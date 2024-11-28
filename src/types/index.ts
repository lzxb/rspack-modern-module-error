// -1: 全部
// 7: 近7天
// 30: 近30天
// 90: 近90天
// 180: 近180天
export type TimeValues = -1 | 7 | 30 | 90 | 180;
export * from './enum';
/**
 * label & value & disabled
 */
export interface SelectItem {
    label: string;
    value: any; // string | number | boolean | symbol;
    disabled?: boolean;
}
