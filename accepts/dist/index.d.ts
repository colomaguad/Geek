import type { IncomingMessage as I, IncomingHttpHeaders } from 'node:http';
import Negotiator from 'negotiator';
export declare class Accepts {
    headers: IncomingHttpHeaders;
    negotiator: Negotiator;
    constructor(req: Pick<I, 'headers'>);
    /**
     * Check if the given `type(s)` is acceptable, returning the best match when true, otherwise `false`, in which case you should respond with 406 "Not Acceptable".
     *
     * The `type` value may be a single mime type string such as "application/json", the extension name such as "json" or an array `["json", "html", "text/plain"]`. When a list or array is given the _best_ match, if any is returned. When no types are given as arguments, returns all types accepted by the client in the preference order.
     */
    types(types: string | string[], ...args: string[]): string[] | string | false;
    get type(): (types: string | string[], ...args: string[]) => string[] | string | false;
    /**
     * Return accepted encodings or best fit based on `encodings`.
     *
     * Given `Accept-Encoding: gzip, deflate`
     * an array sorted by quality is returned:
     *
     *     ['gzip', 'deflate']
     */
    encodings(encodings: string | string[], ...args: string[]): string | string[] | boolean;
    get encoding(): (encodings: string | string[], ...args: string[]) => string | string[] | boolean;
    /**
     * Return accepted charsets or best fit based on `charsets`.
     *
     * Given `Accept-Charset: utf-8, iso-8859-1;q=0.2, utf-7;q=0.5`
     * an array sorted by quality is returned:
     *
     *     ['utf-8', 'utf-7', 'iso-8859-1']
     */
    charsets(charsets?: string | string[], ...args: string[]): string | string[] | boolean;
    get charset(): (charsets: string | string[], ...args: string[]) => string | string[] | boolean;
    /**
     * Return accepted languages or best fit based on `langs`.
     *
     * Given `Accept-Language: en;q=0.8, es, pt`
     * an array sorted by quality is returned:
     *
     *     ['es', 'pt', 'en']
     *
     */
    languages(languages: string | string[], ...args: string[]): string | string[] | boolean;
    get lang(): (languages: string | string[], ...args: string[]) => string | string[] | boolean;
    get langs(): (languages: string | string[], ...args: string[]) => string | string[] | boolean;
    get language(): (languages: string | string[], ...args: string[]) => string | string[] | boolean;
}
//# sourceMappingURL=index.d.ts.map