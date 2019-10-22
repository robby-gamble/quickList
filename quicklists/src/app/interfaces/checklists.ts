export interface Checklist{
    id: string;
    title: string;
    items: ChecklistItem[];
}
export interface ChecklistItem{
    title: string;
    checked: boolean;
}

let myChecklist: Checklist ={
    id: 'my-checklist',
    title: 'My Checklist',
    items: [
        {
            title: 'Item One',
            checked: false
        },
        {
            title: 'Item Two',
            checked: true
        },
    ]
};

