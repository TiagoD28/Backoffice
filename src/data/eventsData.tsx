interface Events {
    id: number;
    IDEvent: number;
    EventName: string;
    DateStart: string;
    DateEnd: string;
    Local: string;
    IDEventUCI: number;
}

export const eventsData: Events[] = [
    {
        id: 1,
        IDEvent: 1,
        EventName: 'Event Test',
        DateStart: new Date().toISOString().split("T")[0],
        DateEnd: new Date(Date.now() + 259200000).toISOString().split("T")[0],
        Local: 'Local Test',
        IDEventUCI: 11
    },
    {
        id: 2,
        IDEvent: 2,
        EventName: 'Race Test',
        DateStart: new Date().toISOString().split("T")[0],
        DateEnd: new Date(Date.now() + 359200000).toISOString().split("T")[0],
        Local: 'Local Test',
        IDEventUCI: 21
    },
    {
        id: 3,
        IDEvent: 3,
        EventName: 'Trail Test',
        DateStart: new Date().toISOString().split("T")[0],
        DateEnd: new Date(Date.now() + 559200000).toISOString().split("T")[0],
        Local: 'Local Test',
        IDEventUCI: 31
    },
]