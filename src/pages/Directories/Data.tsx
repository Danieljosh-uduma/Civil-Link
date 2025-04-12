type cardProps = {
    id: number;
    img: string;
    name: string;
    title: string;
}

const cards: cardProps[] = [
    { id: 1, img: "https://picsum.photos/200?random=1", name: "John Doe", title: "Engineer"},
    { id: 2, img: "https://picsum.photos/200?random=2", name: "Jane Smith", title: "Designer"},
    { id: 3, img: "https://picsum.photos/200?random=3", name: "Alice Johnson", title: "Manager"},
    { id: 4, img: "https://picsum.photos/200?random=4", name: "Bob Brown", title: "Developer"},
    { id: 5, img: "https://picsum.photos/200?random=5", name: "Charlie White", title: "Analyst"},
    { id: 6, img: "https://picsum.photos/200?random=6", name: "Diana Green", title: "Consultant"},
    { id: 7, img: "https://picsum.photos/200?random=7", name: "Evan Black", title: "Architect"},
    { id: 8, img: "https://picsum.photos/200?random=8", name: "Fiona Blue", title: "Technician"},
    { id: 9, img: "https://picsum.photos/200?random=9", name: "George Yellow", title: "Supervisor"},
    { id: 10, img: "https://picsum.photos/200?random=10", name: "Hannah Red", title: "Coordinator"},
];

export type { cardProps }
export default cards