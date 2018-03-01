declare namespace j5 {
    interface Message {}

    interface Request extends Message {
        id?: string; // request id
        type: string; // request type
        board: string; // board id
    }

    interface Response extends Message {
        id?: string;
        type?: string;
        status: number;
    }

    interface ErrorResponse extends Response {
        status: 500;
        error?: any;
    }

    interface ConnectRequest extends Request {
        type: "connect";
    }

    interface CallRequest extends Request {
        type: "call";
        component: string;
        componentArgs?: (number | string)[];
        function: string;
        functionArgs?: (number | string)[];
    }

    interface CallResponse extends Response {
        resp: any;
    }

    interface ListenEventRequest extends Request {
        type: "listenevent";
        component: string;
        componentArgs?: (number | string)[];
        eventId: string;
        eventName: string;
    }

    interface Event extends Response {
        type: "event";
        eventId: string;
        eventName: string;
    }
}