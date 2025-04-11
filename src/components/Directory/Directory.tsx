import Card from "../Card/Card";
import './Directory.css'

const cards = [
    { id: 1, img: "https://picsum.photos/200?random=1", name: "John Doe", title: "Engineer", key: 1 },
    { id: 2, img: "https://picsum.photos/200?random=2", name: "Jane Smith", title: "Designer", key: 2 },
    { id: 3, img: "https://picsum.photos/200?random=3", name: "Alice Johnson", title: "Manager", key: 3 },
    { id: 4, img: "https://picsum.photos/200?random=4", name: "Bob Brown", title: "Developer", key: 4 },
    { id: 5, img: "https://picsum.photos/200?random=5", name: "Charlie White", title: "Analyst", key: 5 },
    { id: 6, img: "https://picsum.photos/200?random=6", name: "Diana Green", title: "Consultant", key: 6 },
    { id: 7, img: "https://picsum.photos/200?random=7", name: "Evan Black", title: "Architect", key: 7 },
    { id: 8, img: "https://picsum.photos/200?random=8", name: "Fiona Blue", title: "Technician", key: 8 },
    { id: 9, img: "https://picsum.photos/200?random=9", name: "George Yellow", title: "Supervisor", key: 9 },
    { id: 10, img: "https://picsum.photos/200?random=10", name: "Hannah Red", title: "Coordinator", key: 10 },
];

export default function Directory() {
    
    return (
        <section className="main-directory">
            <h2 className="h2">Official</h2>
            <div className="directory">
                {cards.map(card => <Card key={card.id} img={card.img} name={card.name} title={card.title}/>)}
            </div>
        </section>
    )
}