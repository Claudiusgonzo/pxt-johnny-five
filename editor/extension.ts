/// <reference path="../node_modules/pxt-core/built/pxteditor.d.ts" />

namespace pxt.editor {
    initExtensionsAsync = function (opts: pxt.editor.ExtensionOptions): Promise<pxt.editor.ExtensionResult> {
        pxt.debug('loading pxt-j5 target extensions...')
        const res: pxt.editor.ExtensionResult = {
            deployCoreAsync: (resp: pxtc.CompileResult) => {
                // send output files to node.js server to save locally
                return Promise.resolve();
            }
        };
        return Promise.resolve<pxt.editor.ExtensionResult>(res);
    }
}