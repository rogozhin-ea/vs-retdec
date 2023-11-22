"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    let k_key = "", a_key = "", path = "", o_key = "", f_key = "", agressive_opts_key = "", keep_all_brackets_key = "", keep_lib_funcs_key = "", no_debug_comments_key = "", no_opts_key = "", no_symbolic_names_key = "", no_var_renaming_key = "", strict_fpu_semantics_key = "", cleanup_key = "", fileinfo_verbose_key = "", no_config_key = "", config_key = "";
    const vscode = require('vscode');
    context.subscriptions.push(vscode.commands.registerCommand('vs-retdec.run', () => {
        const keepValue = vscode.workspace.getConfiguration().get('vs-retdec.keep-unreachable-funcs');
        if (keepValue == true) {
            k_key = " -k";
        }
        const archValue = vscode.workspace.getConfiguration().get('vs-retdec.arch');
        if (archValue != "none") {
            a_key = " -a " + archValue;
        }
        const pathValue = vscode.workspace.getConfiguration().get('vs-retdec.chooseRetDec');
        if (pathValue != "default/path/to/file") {
            path = pathValue;
        }
        const outputValue = vscode.workspace.getConfiguration().get('vs-retdec.output');
        if (outputValue != "default/path/to/file") {
            o_key = " -o " + outputValue;
        }
        const output_formatValue = vscode.workspace.getConfiguration().get('vs-retdec.output_format');
        if (output_formatValue != "plain") {
            f_key = " -f " + output_formatValue;
        }
        //backend-agressive-opts
        const agressiveOptsValue = vscode.workspace.getConfiguration().get('vs-retdec.backend-agressive-opts');
        if (agressiveOptsValue == true) {
            //agressive_opts_key
            agressive_opts_key = " --backend-agressive-opts";
        }
        //backend-keep-all-brackets
        const keepBracketsValue = vscode.workspace.getConfiguration().get('vs-retdec.backend-keep-all-brackets');
        if (keepBracketsValue == true) {
            //agressive_opts_key
            keep_all_brackets_key = " --backend-keep-all-brackets";
        }
        //--backend-keep-library-funcs
        const keepLibFuncsValue = vscode.workspace.getConfiguration().get('vs-retdec.backend-keep-library-funcs');
        if (keepLibFuncsValue == true) {
            //keep_lib_funcs_key
            keep_lib_funcs_key = " --backend-keep-library-funcs";
        }
        //--backend-no-debug-comments
        const noDebugCommentsValue = vscode.workspace.getConfiguration().get('vs-retdec.backend-no-debug-comments');
        if (noDebugCommentsValue == true) {
            //no_debug_comments_key
            no_debug_comments_key = " --backend-no-debug-comments";
        }
        //--backend-no-opts
        const noOptsValue = vscode.workspace.getConfiguration().get('vs-retdec.backend-no-opts');
        if (noOptsValue == true) {
            //no_opts_key
            no_opts_key = " --backend-no-opts";
        }
        //--backend-no-symbolic-names
        const noSymNamesValue = vscode.workspace.getConfiguration().get('vs-retdec.backend-no-symbolic-names');
        if (noSymNamesValue == true) {
            //no_symbolic_names_key
            no_symbolic_names_key = " --backend-no-symbolic-names";
        }
        //--backend-no-var-renaming
        const noVarRenamingValue = vscode.workspace.getConfiguration().get('vs-retdec.backend-no-var-renaming');
        if (noVarRenamingValue == true) {
            //no_var_renaming_key
            no_var_renaming_key = " --backend-no-var-renaming";
        }
        //--backend-strict-fpu-semantics
        const strictFpuSemValue = vscode.workspace.getConfiguration().get('vs-retdec.backend-strict-fpu-semantics');
        if (strictFpuSemValue == true) {
            //strict_fpu_semantics_key
            strict_fpu_semantics_key = " --backend-strict-fpu-semantics";
        }
        //--cleanup
        const cleanupValue = vscode.workspace.getConfiguration().get('vs-retdec.cleanup');
        if (cleanupValue == true) {
            //cleanup_key
            cleanup_key = " --cleanup";
        }
        //--fileinfo-verbose
        const fileinfoVerbValue = vscode.workspace.getConfiguration().get('vs-retdec.fileinfo-verbose');
        if (fileinfoVerbValue == true) {
            //fileinfo_verbose_key
            fileinfo_verbose_key = " --fileinfo-verbose";
        }
        //noconfig
        const noConfigValue = vscode.workspace.getConfiguration().get('vs-retdec.noconfig');
        const configValue = vscode.workspace.getConfiguration().get('vs-retdec.config');
        if (noConfigValue == false) {
            no_config_key = " --no-config";
        }
        if ((noConfigValue == true) && (configValue != "default/path/to/json/")) {
            config_key = " --config " + configValue;
        }
        console.log(path + k_key + a_key + o_key + f_key + agressive_opts_key + keep_all_brackets_key + keep_lib_funcs_key + no_debug_comments_key + no_opts_key + no_symbolic_names_key + no_var_renaming_key + strict_fpu_semantics_key + cleanup_key + fileinfo_verbose_key + no_config_key + config_key);
    }));
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map