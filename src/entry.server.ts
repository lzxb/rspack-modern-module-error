import type { RenderContext } from '@gez/core';

export default async (rc: RenderContext) => {
    await rc.commit();
    rc.html = 'ok';
};