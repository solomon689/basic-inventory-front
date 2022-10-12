export class Response<T> {
    private statusCode: number;
    private message: string;
    public data?: T

    constructor(statusCode: number, message: string, data?: T) {
        this.statusCode = statusCode;
        this.message = message;
        this.data = data;
    }

    get getStatusCode(): number {
        return this.statusCode;
    }

    get getMessage(): string {
        return this.message;
    }
}