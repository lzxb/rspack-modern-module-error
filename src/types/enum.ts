/**
 * 用户类型枚举
 */
export enum USER_ROLE {
    Normal = 0,
    Sales,
    IB,
    Institutional,
    None = -1
}

/**
 * 判断是否netting、hedge模块的枚举
 *  netting：0 = 机构 = 净持仓模式
 *  error：1  直接报错  @ray
 *  hedge：2  = 个人 = 对冲模式
 */
export enum MARGIN_MODE {
    NETTING,
    ERROR,
    HEDGE
}
