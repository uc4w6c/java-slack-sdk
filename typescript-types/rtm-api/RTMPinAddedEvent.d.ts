export interface RTMPinAddedEvent {
    type?:       string;
    user?:       string;
    channel_id?: string;
    item?:       Item;
    event_ts?:   string;
}

export interface Item {
    type?:       string;
    channel?:    string;
    created_by?: string;
    created?:    number;
    message?:    Message;
}

export interface Message {
    client_msg_id?: string;
    type?:          string;
    user?:          string;
    text?:          string;
    ts?:            string;
    permalink?:     string;
}