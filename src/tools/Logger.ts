import * as winston from "winston";
winston.level = "debug";

class Logger {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    public debug(format: string, ...params: any[]) {
        winston.log.apply(this, ["debug", `${this.name} - ${format}`].concat(params));
    }

    public info(format: string, ...params: any[]) {
        winston.log.apply(this, ["info", `${this.name} - ${format}`].concat(params));
    }

    public warn(format: string, ...params: any[]) {
        winston.log.apply(this, ["warn", `${this.name} - ${format}`].concat(params));
    }

    public error(format: string, ...params: any[]) {
        winston.log.apply(this, ["error", `${this.name} - ${format}`].concat(params));
    }
}

export default function(name: string) {
    return new Logger(name);
}
