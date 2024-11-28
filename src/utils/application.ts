
import { USER_ROLE } from 'gez-demo/src/types/enum';

export function getApplicationConfig<T>(
    config: any,
    values: Record<'web' | 'crm', T>
) {
    const name = config.HOST_NAME;
    if (name.includes('crm')) {
        return values.crm;
    }
    return values.web;
}

export function getUserRoleConfig<T>(
    userRole: USER_ROLE,
    values: Record<'personal' | 'institutional', T>
) {
    if (userRole === USER_ROLE.Normal) {
        return values.personal;
    }
    if (userRole === USER_ROLE.Institutional) {
        return values.institutional;
    }
    return '';
}
