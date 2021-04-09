
interface IParserResult {
    error?:string;
    result:any;
}

type HookName = 'callVariable'|'callFunction'|'callCellValue'|'callRangeValue'


declare module "hot-formula-parser" {
    class Parser {
        parse:(expression:string)=> IParserResult;

        setVariable:(name:string, value:any)=>void;
        getVariable:(name:string)=>any;
        setFunction:(name:string,fn:(params?:[])=>any)=>any;
        getFunction:(name:string) => (params?:[])=>any;
        on:(name:HookName,callback:Function) => (params?:[])=>any;
    }

    const SUPPORTED_FORMULAS:string[];

    export {Parser,SUPPORTED_FORMULAS}
}