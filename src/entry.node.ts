import http from 'node:http';
import type { GezOptions } from '@gez/core';


export default {
    modules: {
        exports: ['root:src/types/index.ts', 'root:src/types/enum.ts', 'root:src/utils/application.ts']
    },
    // 本地执行 dev 和 build 时会使用
    async createDevApp(gez) {
        return import('@gez/rspack').then((m) =>
            m.createRspackHtmlApp(gez, {
                config(context) {
                    // 可以在这里修改 Rspack 编译的配置
                }
            })
        );
    },
    async createServer(gez) {
        const server = http.createServer((req, res) => {
            // 静态文件处理
            gez.middleware(req, res, async () => {
                // 传入渲染的参数
                const rc = await gez.render({
                    params: {
                        url: req.url
                    }
                });
                // 响应 HTML 内容
                res.end(rc.html);
            });
        });
        // 监听端口
        server.listen(3000, () => {
            console.log('http://localhost:3000');
        });
    },
    // ... 其它选项
    async postCompileProdHook(gez) {
        const rc = await gez.render({
            params: {
                url: '/'
            }
        });
        gez.writeSync(
            gez.resolvePath('dist/client', 'index.html'),
            rc.html
        );
    }
} satisfies GezOptions;