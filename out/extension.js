"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const child_process = __importStar(require("child_process"));
/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    let filename = "", k_key = "", a_key = "", path = "", o_key = "", f_key = "", agressive_opts_key = "", keep_all_brackets_key = "", keep_lib_funcs_key = "", no_debug_comments_key = "", no_opts_key = "", no_symbolic_names_key = "", no_var_renaming_key = "", strict_fpu_semantics_key = "", cleanup_key = "", fileinfo_verbose_key = "", no_config_key = "", config_key = "";
    const vscode = require('vscode');
    filename = " D:\\1\\VS-RetDec\\test\\LR2_RogozhinEA_201-331.exe";
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
        if ((pathValue != "default/path/to/file") && (pathValue != "")) {
            path = pathValue;
        }
        const outputValue = vscode.workspace.getConfiguration().get('vs-retdec.output');
        if ((outputValue != "default/path/to/file") && (outputValue != "")) {
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
            agressive_opts_key = " --backend-aggressive-opts";
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
        if ((noConfigValue == true) && (configValue != "default/path/to/json/") && (configValue != "")) {
            config_key = " --config " + configValue;
        }
        //console.log(path + k_key + a_key + o_key + f_key + agressive_opts_key + keep_all_brackets_key + keep_lib_funcs_key + no_debug_comments_key + no_opts_key + no_symbolic_names_key + no_var_renaming_key + strict_fpu_semantics_key + cleanup_key + fileinfo_verbose_key + no_config_key + config_key);
        const command = "python " + path + filename + k_key + a_key + o_key + f_key + agressive_opts_key + keep_all_brackets_key + keep_lib_funcs_key + no_debug_comments_key + no_opts_key + no_symbolic_names_key + no_var_renaming_key + strict_fpu_semantics_key + cleanup_key + fileinfo_verbose_key + no_config_key + config_key;
        child_process.exec(command, (error) => {
            if (error) {
                vscode.window.showErrorMessage("Command failed with error: " + error.message);
            }
            else {
                vscode.window.showInformationMessage("Command completed successfully!");
                let filesToOpen = [
                    vscode.Uri.file(outputValue),
                    vscode.Uri.file(outputValue.slice(0, -3) + "dsm"),
                ];
                vscode.window.showTextDocument(filesToOpen[0], { preview: false }).then((editor) => {
                    filesToOpen.shift();
                    filesToOpen.forEach(file => {
                        vscode.workspace.openTextDocument(file).then((doc) => {
                            vscode.window.showTextDocument(doc, { preview: false });
                        });
                    });
                });
            }
        });
    }));
}
exports.activate = activate;
;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map