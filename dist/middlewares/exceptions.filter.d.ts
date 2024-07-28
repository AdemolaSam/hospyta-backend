import { ArgumentsHost, ExceptionFilter } from "@nestjs/common";
export declare class AllExceptionFilters implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost): void;
}
